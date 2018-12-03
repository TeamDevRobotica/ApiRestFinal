import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined, OnNull } from "routing-controllers";
import { getRepository, Not } from "typeorm";
import { UserNotFoundError } from "../excepciones/UserNotFoundError";
import { UserAppNivel } from "../entity/UserAppNivel";

@JsonController()
export class UsuarioNivelControlador {

    private usuarioNivelRepositorio = getRepository(UserAppNivel);

    // @Get("/nivel")
    // getAll() {
    //     return this.usuarioNivelRepositorio
    //         .find();
    // }

    @Get("/nivel/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.usuarioNivelRepositorio
            .findOne(id);
    }

    @Post("/nivel")
    post(@Body() user: any) {
        return "--";
    }

    @Put("/nivel/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "--";
    }

    @Delete("/nivel/:id")
    remove(@Param("id") id: number) {
        return "--";
    }

    @Get("/nivel")
    todosMenosAdmin() {
        return this.usuarioNivelRepositorio.find({ id: Not(1) });
    }

}