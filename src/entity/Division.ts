import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { HorariosTrayectos } from "./HorariosTrayectos";

@Entity()
export class Division {

    @PrimaryGeneratedColumn({ name: "Id_Division" })
    id: number;

    @Column({ name: "Descripcion" })
    descripcion: string;

    @OneToMany(type => HorariosTrayectos, horario => horario.division)
    horarios: HorariosTrayectos[];

}