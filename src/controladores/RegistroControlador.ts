import { Body, Post, JsonController } from "routing-controllers";
import { getRepository, IsNull } from "typeorm";
import { UserApp } from "../entity/UserApp";
import { Tutores } from "../entity/Tutores";
import { Personas } from "../entity/Personas";

@JsonController()
export class RegistroControlador {

    private usuarioRepositorio = getRepository(UserApp);
    private tutorRepositorio = getRepository(Tutores);
    private personaRepositorio = getRepository(Personas);

    @Post("/registrar")
    async post(@Body() user: any) {
        console.log(user['nivel']);
        if (user['nivel'] === 3) {
            return await this.controlarYCrearUsuarioAlumno(user);
        } else if (user['nivel'] === 2) {
            return await this.controlarYCrearUsuarioTutor(user);
        }
        return "Error";
    }

    //Controla y crea un usuario para un alumno
    async controlarYCrearUsuarioAlumno(user: any) {
        //Busco el alumno por dni
        let alumno = await this.personaRepositorio.findOne(user['dni']);
        //console.log(alumno);
        //Si no encuentra el alumno
        if (!alumno) {
            //console.log(alumno);
            return "Alumno no encontrado";
            //Si encuentra el alumno
        } else {
            //Busco un alumno por dni y usuario = null
            alumno = await this.personaRepositorio.findOne({
                where: {
                    Dni: user['dni'], userapp: IsNull()
                }
            });
            //Si existe el alumno y tiene usuario
            if (!alumno) {
                //console.log(alumno);
                return "El alumno ya posee usuario";

                //Si existe el alumno y no tiene usuario
            } else {

                let userApp = new UserApp(user['nombreUsuario'], 'pass', user['nivel']);

                let userACrear = await this.usuarioRepositorio.create(userApp);
                //await this.usuarioRepositorio.save(await this.usuarioRepositorio.create(new UserApp(user['nombreUsuario'], 'pass', user['nivel'])));
                //inserto el usuario en la base de datos
                await this.usuarioRepositorio.save(userACrear);
                //actualizo el alumno con el id del usuario recien creado
                return this.personaRepositorio.update(user['dni'], { userapp: userACrear }).then(data => {
                    if (data) {
                        return 'Usuario creado'
                    } else {
                        return 'Usuario no creado'
                    }

                });
            }
        }
    }

    //Controla y crea un usuario para un tutor
    async controlarYCrearUsuarioTutor(user: any) {
        //Busco un tutor por dni
        let tutor = await this.tutorRepositorio.findOne(user['dni']);

        //Si no existe el tutor
        if (!tutor) {

            //Creo un tutor
            tutor = new Tutores(user['dni'], user['nombreYApellido'], 1, 1, 1, 1, 1, 1, 1);

            //Creo un usuario
            let usuario = new UserApp(user['nombreUsuario'], 'pass', user['nivel'])

            //Asocio el usuario creado al tutor creado
            tutor.userapp = usuario;
            //await this.tutorRepositorio.create(tutor)

            //let tutorAGuardar = await this.tutorRepositorio.create(tutor);
            //Guardo el tutor 
            return await this.tutorRepositorio.save(tutor).then(data => {
                if (data) {
                    return "Tutor y usuario creados exitosamente"
                } else {
                    return "Tutor y usuario no creados"
                }
            });
            //Si existe el tutor
        } else {
            //Busco un tutor por dni y usuario = null
            tutor = await this.tutorRepositorio.findOne({
                where: {
                    Dni_Tutor: user['dni'], userapp: IsNull()
                }
            });
            //Si existe el tutor y tiene usuario
            if (!tutor) {
                //console.log(tutor);
                return "El tutor ya posee usuario";

                //Si existe el tutor y no tiene usuario
            } else {

                let userApp = new UserApp(user['nombreUsuario'], 'pass', user['nivel']);
                //inserto el usuario en la base de datos
                await this.usuarioRepositorio.save(userApp);

                //actualizo el tutor con el id del usuario recien creado
                return this.tutorRepositorio.update(user['dni'], { userapp: userApp }).then(data => {
                    if (data) {
                        return 'Usuario creado'
                    } else {
                        return 'Usuario no creado'
                    }
                });;
            }
        }
    }

}