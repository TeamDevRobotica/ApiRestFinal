import { Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers";
import { getRepository } from "typeorm";
import { UserNotFoundError } from "../excepciones/UserNotFoundError";
import { Turno } from "../entity/Turno";

@JsonController()
export class TurnoControlador {

    private turnoRepositorio = getRepository(Turno);

    @Get("/turno")
    getAll() {
        return this.turnoRepositorio.find();
    }

    @Get("/turno/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.turnoRepositorio.findOne(id);
    }

    @Post("/turno")
    async post(@Body() turno: any) {
        let turnoR = await this.turnoRepositorio.create(turno);
        return this.turnoRepositorio.save(turnoR);
    }

    @Put("/turno/:id")
    put(@Param("id") id: number, @Body() pais: any) {
        return "Updating ...";
    }

    @Delete("/turno/:id")
    remove(@Param("id") id: number) {
        return "Removing ...";
    }

}