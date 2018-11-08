import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Turno } from "../entity/Turno";

export class TurnoControlador {

    private turnoRepository = getRepository(Turno);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.turnoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.turnoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let turno = await this.turnoRepository.create(request.body);
        return this.turnoRepository.save(turno);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let preinscripcionToRemove = await this.turnoRepository.findOne(request.params.id);
        await this.turnoRepository.remove(preinscripcionToRemove);
    }

}