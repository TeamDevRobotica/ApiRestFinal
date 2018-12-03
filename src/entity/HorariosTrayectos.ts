import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, Double, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Division } from "./Division";
import { Personas } from "./Personas";
import { Turno } from "./Turno";
import { Trayectos } from "./Trayectos";


@Entity()
export class HorariosTrayectos {

    @PrimaryGeneratedColumn({ name: "Id_Horario" })
    id: number;

    @Column({ name: "Nombre_Dia" })
    dia: string;

    @Column("double", {
        nullable: true,
        precision: 10,
        scale: 2,
        name: "Horario_Entrada"
    })
    horarioEntrada: number;

    @Column("double", {
        nullable: true,
        precision: 10,
        scale: 2,
        name: "Horario_Salida"
    })
    horarioSalida: number;

    @Column({ name: "Observacion" })
    observacion: string;

    @ManyToOne(type => Division, division => division.horarios)
    @JoinColumn({ name: "Id_Division" })
    division: Division;

    @OneToMany(type => Personas, persona => persona.horario)
    personas: Personas[];

    @ManyToOne(type => Turno, turno => turno.horarios)
    @JoinColumn({ name: "Id_Turno" })
    turno: Turno;

    @ManyToOne(type => Trayectos, trayecto => trayecto.horarios)
    @JoinColumn({ name: "Id_Trayecto" })
    trayecto: Trayectos;

}