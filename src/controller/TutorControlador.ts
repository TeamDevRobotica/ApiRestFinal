import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Tutores } from "../entity/Tutores";

export class TutorControlador {

    private userRepository = getRepository(Tutores);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find({ relations: ['hijos', 'hijos.horario', 'hijos.horario.trayecto'] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}