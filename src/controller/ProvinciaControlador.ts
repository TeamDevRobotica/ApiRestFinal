import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Provincias } from "../entity/Provincias";

export class ProvinciaControlador {

    private provinciaRepository = getRepository(Provincias);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.provinciaRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.provinciaRepository.findOne(request.params.id);
    }

    async buscarProvinciasPais(request: Request, response: Response, next: NextFunction) {
        console.log('rest idpais ', request.params.idpais)
        return this.provinciaRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let provincia = await this.provinciaRepository.create(request.body);
        return this.provinciaRepository.save(provincia);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let provinciaToRemove = await this.provinciaRepository.findOne(request.params.id);
        await this.provinciaRepository.remove(provinciaToRemove);
    }

}