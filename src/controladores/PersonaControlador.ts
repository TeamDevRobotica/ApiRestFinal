import { Param, Body, Get, Post, Put, Delete, JsonController, OnUndefined } from "routing-controllers";
import { getRepository } from "typeorm";

import { UserNotFoundError } from "../excepciones/UserNotFoundError";

import { Personas } from "../entity/Personas";

@JsonController()
export class PersonaControlador {

    private personaRepositorio = getRepository(Personas);

    @Get("/personas")
    getAll() {
        return this.personaRepositorio.find();
    }

    @Get("/personas/:id")
    @OnUndefined(UserNotFoundError)
    getOne(@Param("id") id: number) {
        return this.personaRepositorio.findOne(id);
    }

    @Post("/personas")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/personas/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/personas/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

    @Get("/personaPorDniDeTutor/:dni")
    @OnUndefined(UserNotFoundError)
    async devolverPersonaPorDniTutor(@Param("dni") dni: number) {
        console.log("dniTutor" + dni);
        // return this.personaRepositorio
        //     .createQueryBuilder("user")
        //     .where("user.nombreUsuario = :nombreUsuario AND user.claveUsuario = :claveUsuario", { nombreUsuario: usuario, claveUsuario: clave })
        //     .getOne();
        const persona = await this.personaRepositorio.findOne({
            relations: ['notificaciones', 'observaciones', 'horario'],
            where: {
                tutor: dni
            }
        });
        console.log(persona);
        return persona;
    }

    @Get("/personaConRelaciones/:dni")
    @OnUndefined(UserNotFoundError)
    async devolverPersonaConTodasSusRelaciones(@Param("dni") dni: number) {
        console.log("dniPersona " + dni);
        let retorno = await this.personaRepositorio
            .createQueryBuilder("persona")
            .leftJoinAndSelect("persona.observaciones", 'observacionPersona')
            .leftJoinAndSelect("persona.notificaciones", 'notificacionPersona')
            .leftJoinAndSelect('notificacionPersona.estado', 'notificacionPersonaEstado')
            .leftJoinAndSelect('notificacionPersona.tipo', 'notificacionPersonaTipo')
            .leftJoinAndSelect('persona.horario', 'horariosTrayectos')
            .leftJoinAndSelect('horariosTrayectos.division', 'division')
            .leftJoinAndSelect('horariosTrayectos.turno', 'turno')
            .leftJoinAndSelect('horariosTrayectos.trayecto', 'trayectos')
            .where("persona.dni = :dni", { dni: dni })
            .orderBy({
                'observacionPersona.id': 'DESC',
                'notificacionPersona.id': 'DESC'
            })
            .getOne();
        /*         if (!retorno) {
                    retorno = await this.personaRepositorio.findOne({
                        relations: ['observaciones', 'notificaciones', 'notificaciones.estado', 'notificaciones.tipo', 'horario', 'horario.division', 'horario.turno', 'horario.trayecto'],
                        where: {
                            Dni: dni
                        },
        
                    });
                } */
        // console.log(retorno);
        return retorno;
    }

}