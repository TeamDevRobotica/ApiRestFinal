import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Localidades } from "../entity/Localidades";

export class LocalidadControlador {

    private localidadRepository = getRepository(Localidades);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let localidad = await this.localidadRepository.create(request.body);
        return this.localidadRepository.save(localidad);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let localidadToRemove = await this.localidadRepository.findOne(request.params.id);
        await this.localidadRepository.remove(localidadToRemove);
    }

}