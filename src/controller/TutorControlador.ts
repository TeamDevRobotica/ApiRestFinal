import { getRepository, IsNull, Not } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Tutores } from "../entity/Tutores";

export class TutorControlador {

    private tutorRepositorio = getRepository(Tutores);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.tutorRepositorio.find({ relations: ['hijos', 'hijos.horario', 'hijos.horario.trayecto', 'userapp']/* , where: { userapp: !IsNull() } */ });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const tutor = await this.tutorRepositorio.find({
            where: {
                Dni_Tutor: request.params.dni
            }
        });
        return tutor;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.tutorRepositorio.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.tutorRepositorio.findOne(request.params.id);
        await this.tutorRepositorio.remove(userToRemove);
    }

    async devolverTutorSinUsuario(request: Request, response: Response, next: NextFunction) {
        console.log("Ingreso");
        console.log(request.params.usuario);
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');
        console.log('dni ' + request.params.dni + ' nombreUsuario ' + request.params.nombreUsuario);
        const tutor = await this.tutorRepositorio.find({
            relations: ['userapp'],
            where: {
                Dni_Tutor: request.params.dni, userapp: IsNull()
            }
        });
        console.log(tutor);
        return tutor;
    }

    async devolverTutorPorIdDeUsuario(request: Request, response: Response, next: NextFunction) {
        let tutor = await this.tutorRepositorio.find({
            where: {
                userapp: request.params.id
            }
        });
        return tutor;
    }

}