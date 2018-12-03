import { getRepository, IsNull } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { UserApp } from "../entity/UserApp";
import { Tutores } from "../entity/Tutores";;
import { Personas } from "../entity/Personas";

export class RegistrarUsuario {

    private usuarioRepositorio = getRepository(UserApp);

    private tutorRepositorio = getRepository(Tutores);

    private personaRepositorio = getRepository(Personas);


    async registrar(request: Request, response: Response, next: NextFunction) {

        console.log("Ingreso");
        console.log(request.body);
        console.log('dni ' + request.body.dni + ' nombreUsuario ');

        //Obtengo el nivel de los parametros recibidos (1=Admin,2=Tutor,3= Alumno)
        let nivel = request.body.nivel;

        console.log(nivel);

        //Si el nivel es igual a 3
        if (nivel === 3) {

            // Compruebo q exista en la base de datos
            let alumno = await this.personaRepositorio.findOne({
                where: {
                    Dni: request.body.dni
                }

            });

            //Si existe
            if (alumno) {
                console.log('Existe el alumno ');
                //compruebo que no tenga usuario
                let alumno = await this.personaRepositorio.findOne({
                    where: {
                        Dni: request.body.dni, userapp: IsNull()
                    }
                });

                //Si no tiene usuario
                if (alumno) {
                    console.log('Existe el alumno y no tiene usuario');
                    //seteo el usuario a crear
                    let userACrear = await this.usuarioRepositorio.create({
                        nombreUsuario: request.body.nombreUsuario,
                        nivel: request.body.nivel/* ,
                        alumno: request.body.dni */
                    });

                    //inserto el usuario en la base de datos
                    await this.usuarioRepositorio.save(userACrear);
                    console.log(userACrear.id);
                    //actualizo el alumno con el id del usuario recien creado
                    return this.personaRepositorio.update(request.body.dni, { userapp: userACrear });
                }
            }
            //si el nivel es igual a 2 'Tutor'
        } else if (nivel === 2) {
            //compruebo q exista en la base de datos
            let tutor = await this.tutorRepositorio.find({
                where: {
                    Dni_Tutor: request.body.dni
                }
            });
            //Si existe 
            if (tutor.length > 0) {
                console.log('Existe el tutor ');
                //Compruebo que no tenga usuario
                let tutor = await this.tutorRepositorio.find({
                    where: {
                        Dni_Tutor: request.body.dni, userapp: IsNull()
                    }

                });

                //Si no tiene usuario
                if (tutor.length > 0) {
                    console.log('Existe el tutor y no tiene usuario');
                    //seteo el usuario a crear
                    let userACrear = await this.usuarioRepositorio.create({
                        nombreUsuario: request.body.nombreUsuario,
                        nivel: request.body.nivel/* ,
                        tutor: request.body.dni */
                    });

                    //inserto el usuario en la base de datos
                    await this.usuarioRepositorio.save(userACrear);
                    console.log(userACrear.id);
                    //actualizo el tutor con el id del usuario recien creado
                    return this.tutorRepositorio.update(request.body.dni, { userapp: userACrear });
                }

                //si no existe 
            } else {
                let user = this.usuarioRepositorio.find();
            }
        }

        // let user = await this.usuarioRepositorio
        //     .createQueryBuilder("user")
        //     .where("user.tutor= :tutor OR user.alumno = :alumno", { tutor: request.body.dni, alumno: request.body.dni })
        //     .getOne();
    }

}