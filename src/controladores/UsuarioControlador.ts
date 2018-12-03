import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined, OnNull } from "routing-controllers";
import { getRepository, IsNull } from "typeorm";
import { UserApp } from "../entity/UserApp";
import { UserNotFoundError } from "../excepciones/UserNotFoundError";
import { Tutores } from "../entity/Tutores";
import { Personas } from "../entity/Personas";

@JsonController()
export class UsuarioControlador {

    private usuarioRepositorio = getRepository(UserApp);

    @Get("/users")
    getAll() {
        return this.usuarioRepositorio.find();
    }

    @Get("/users/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.usuarioRepositorio.findOne(id);
    }


    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

    @Get("/loguin/:usuario/:clave")
    @OnUndefined(UserNotFoundError)
    async loguearse(@Param("usuario") usuario: string, @Param("clave") clave: string) {
        console.log("usuario " + usuario + " clave " + clave);
        return await this.usuarioRepositorio.findOne({
            relations: ['nivel'],
            where: {
                nombreUsuario: usuario, claveUsuario: clave
            }
        })
    }

}