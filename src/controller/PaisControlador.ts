import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Paises } from "../entity/Paises";

export class PaisControlador {

    private paisRepository = getRepository(Paises);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.paisRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.paisRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let pais = await this.paisRepository.create(request.body);
        console.log(' Save ', pais);
        return this.paisRepository.save(pais);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let preinscripcionToRemove = await this.paisRepository.findOne(request.params.id);
        await this.paisRepository.remove(preinscripcionToRemove);
    }

}