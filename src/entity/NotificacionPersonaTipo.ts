import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Tutores } from "./Tutores";
import { UserApp } from "./UserApp";
import { NotificacionPersona } from "./NotificacionPersona";

@Entity()
export class NotificacionPersonaTipo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(type => NotificacionPersona, notificacion => notificacion.tipo)
    notificaciones: NotificacionPersona[];

}