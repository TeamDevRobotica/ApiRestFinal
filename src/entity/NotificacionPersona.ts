import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { UserApp } from "./UserApp";
import { Personas } from "./Personas";
import { NotificacionPersonaEstado } from "./NotificacionPersonaEstado";
import { NotificacionPersonaTipo } from "./NotificacionPersonaTipo";

@Entity()
export class NotificacionPersona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Personas, persona => persona.notificaciones)
    @JoinColumn({ name: 'dni' })
    persona: Personas;

    @ManyToOne(type => NotificacionPersonaEstado, estado => estado.notificaciones)
    estado: NotificacionPersonaEstado;

    @ManyToOne(type => NotificacionPersonaTipo, tipo => tipo.notificaciones)
    tipo: NotificacionPersonaTipo;

}