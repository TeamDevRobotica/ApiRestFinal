import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined, OnNull } from "routing-controllers";
import { getRepository, IsNull } from "typeorm";
import { UserApp } from "../entity/UserApp";
import { UserNotFoundError } from "../excepciones/UserNotFoundError";
import { Tutores } from "../entity/Tutores";

@JsonController()
export class TutorControlador {

    private tutorRepositorio = getRepository(Tutores);

    @Get("/tutores")
    getAll() {
        return this.tutorRepositorio.find({ relations: ['hijos', 'hijos.horario', 'hijos.horario.trayecto', 'userapp'] });
    }

    @Get("/tutores/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        if (id => 8) {
            return this.tutorRepositorio.findOne(id);
        }
    }

    @Post("/tutores")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/tutores/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/tutores/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

    @Get("/tutorPorUsuario/:id")
    @OnUndefined(UserNotFoundError)
    async devolverTutorPorIdDeUsuario(@Param("id") id: number) {
        console.log("idUsuario " + id);
        // return this.tutorRepositorio
        //     .createQueryBuilder("user")
        //     .where("user.nombreUsuario = :nombreUsuario AND user.claveUsuario = :claveUsuario", { nombreUsuario: usuario, claveUsuario: clave })
        //     .getOne();
        const tutor = await this.tutorRepositorio.findOne({
            relations: ['hijos', 'hijos.observaciones', 'hijos.notificaciones', 'hijos.notificaciones.estado', 'hijos.notificaciones.tipo', 'hijos.horario', 'hijos.horario.division', 'hijos.horario.turno', 'hijos.horario.trayecto'],
            where: {
                userapp: id
            }
        });
        console.log(tutor);
        // relations: ['nivel', 'tutor', 'tutor.hijos', 'tutor.hijos.observaciones', 'tutor.hijos.notificaciones', 'tutor.hijos.notificaciones.estado', 'tutor.hijos.notificaciones.tipo', 'tutor.hijos.horario', 'tutor.hijos.horario.division', 'tutor.hijos.horario.turno', 'tutor.hijos.horario.trayecto'],
        return tutor;
    }

    @Get("/tutorPorDniYSinUsuario/:dni")
    //@OnUndefined(UserNotFoundError)
    async devolverTutorSiNoTieneUsuario(@Param("dni") dni: number) {
        console.log("dni " + dni);
        const tutor = await this.tutorRepositorio.findOne({
            where: {
                Dni_Tutor: dni, userapp: IsNull()
            }
        });
        console.log(tutor);
        return tutor ? true : false;
    }

}