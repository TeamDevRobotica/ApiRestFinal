import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Preinscripcion } from "../entity/Preinscripcion";

export class PreinscripcionControlador {

    private preinscripcionRepository = getRepository(Preinscripcion);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.preinscripcionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.preinscripcionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let preinscripcion = await this.preinscripcionRepository.create(request.body);
        console.log(' Save ', preinscripcion);
        return this.preinscripcionRepository.save(preinscripcion);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let preinscripcionToRemove = await this.preinscripcionRepository.findOne(request.params.id);
        await this.preinscripcionRepository.remove(preinscripcionToRemove);
    }

}