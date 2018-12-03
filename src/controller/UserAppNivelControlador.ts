import { getRepository, Not } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { UserAppNivel } from "../entity/UserAppNivel";
import { notDeepEqual } from "assert";

export class UserAppNivelControlador {

    private userAppNivelRepositorio = getRepository(UserAppNivel);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userAppNivelRepositorio.find({ relations: ['users'] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userAppNivelRepositorio.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userAppNivelRepositorio.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userAppNivel = await this.userAppNivelRepositorio.findOne(request.params.id);
        await this.userAppNivelRepositorio.remove(userAppNivel);
    }

    async todosMenosAdmin(request: Request, response: Response, next: NextFunction) {
        return this.userAppNivelRepositorio.find({ id: Not(1) });
    }
}
