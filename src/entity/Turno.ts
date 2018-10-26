import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { type } from "os";
import { HorariosTrayectos } from "./HorariosTrayectos";

@Entity()
export class Turno {

    @PrimaryGeneratedColumn({ name: "Id_Turno" })
    id: number;

    @Column({ name: "Descripcion" })
    descripcion: string;

    @OneToMany(type => HorariosTrayectos, horario => horario.turno)
    horarios: HorariosTrayectos[];
}