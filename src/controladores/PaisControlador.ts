import { Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers";
import { getRepository } from "typeorm";
import { UserNotFoundError } from "../excepciones/UserNotFoundError";
import { Paises } from "../entity/Paises";

@JsonController()
export class PaisControlador {

    private paisRepositorio = getRepository(Paises);

    @Get("/pais")
    getAll() {
        return this.paisRepositorio.find({ relations: ['provincias', 'provincias.departamentos', 'provincias.departamentos.localidades'] });
    }

    @Get("/pais/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.paisRepositorio.findOne(id);
    }

    @Post("/pais")
    post(@Body() pais: any) {
        return "Saving ...";
    }

    @Put("/pais/:id")
    put(@Param("id") id: number, @Body() pais: any) {
        return "Updating ...";
    }

    @Delete("/pais/:id")
    remove(@Param("id") id: number) {
        return "Removing ...";
    }

}