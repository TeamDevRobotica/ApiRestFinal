import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Departamento } from "../entity/Departamento";

export class DepartamentoControlador {

    private departamentoRepository = getRepository(Departamento);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.departamentoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.departamentoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let departamento = await this.departamentoRepository.create(request.body);
        return this.departamentoRepository.save(departamento);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let departamentoToRemove = await this.departamentoRepository.findOne(request.params.id);
        await this.departamentoRepository.remove(departamentoToRemove);
    }

}