import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { UserApp } from "../entity/UserApp";

export class UserController {

    private userRepository = getRepository(UserApp);

    async all(request: Request, response: Response, next: NextFunction) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log('//// ' + request.body.nivelId);
        let user = await this.userRepository.create(request.body);
        console.log(' Save ' + user);
        return this.userRepository.save(user);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    // devuelve un usuario por nombre de usuario y clave
    async loguin(request: Request, response: Response, next: NextFunction) {
        console.log("Ingreso");
        console.log(request.params.usuario);
        response.setHeader('Access-Control-Allow-Origin', '*');
        // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Methods', 'GET');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');
        console.log('usuario ' + request.params.usuario + ' clave ' + request.params.clave);
        const usuario = await this.userRepository.find({
            relations: ['nivel', 'tutor', 'tutor.hijos', 'tutor.hijos.observaciones', 'tutor.hijos.notificaciones', 'tutor.hijos.notificaciones.estado', 'tutor.hijos.notificaciones.tipo', 'tutor.hijos.horario', 'tutor.hijos.horario.division', 'tutor.hijos.horario.turno', 'tutor.hijos.horario.trayecto'],
            where: {
                nombreUsuario: request.params.usuario, claveUsuario: request.params.clave
            }
        });
        console.log(usuario);
        return usuario;
    }

}