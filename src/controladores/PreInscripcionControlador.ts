import { Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers";
import { getRepository } from "typeorm";

import { UserNotFoundError } from "../excepciones/UserNotFoundError";

import { Preinscripcion } from "../entity/Preinscripcion";

@JsonController()
export class PreInscripcionControlador {

    private preInscripcionRepositorio = getRepository(Preinscripcion);

    @Get("/preinscripcion")
    getAll() {
        return this.preInscripcionRepositorio.find();
    }

    @Get("/preinscripcion/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.preInscripcionRepositorio.findOne(id);
    }

    @Post("/preinscripcion")
    async post(@Body() preInscripcion: any) {
        let preinscripcion = await this.preInscripcionRepositorio.findOne({
            where: {
                dni: preInscripcion.dni
            }
        });
        if (!preinscripcion) {
            const pre = await this.preInscripcionRepositorio.create(preInscripcion);
            return this.preInscripcionRepositorio.save(pre).then(resultado => {
                if (resultado) {
                    return "Preinscripcion realizada correctamente";
                }
            });
        } else {
            return "El dni ya se encuentra en una preinscripcion";
        }
    }

    @Put("/preinscripcion/:id")
    put(@Param("id") id: number, @Body() preInscripcion: any) {
        return "Updating ...";
    }

    @Delete("/preinscripcion/:id")
    remove(@Param("id") id: number) {
        return "Removing ...";
    }

}