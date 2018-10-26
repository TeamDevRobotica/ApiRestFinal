import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { HorariosTrayectos } from "./HorariosTrayectos";


@Entity()
export class Trayectos {

    @PrimaryGeneratedColumn({ name: "Id_Trayecto" })
    id: number;

    @Column({ name: "Descripcion" })
    descripcion: string;

    @OneToMany(type => HorariosTrayectos, horario => horario.trayecto)
    horarios: HorariosTrayectos[];
}