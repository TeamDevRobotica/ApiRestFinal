import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { UserApp } from "./UserApp";
import { Personas } from "./Personas";

@Entity()
export class ObservacionPersona {

    @PrimaryGeneratedColumn({ name: 'id_Observacion' })
    id: number;

    @Column({ name: 'Detalle' })
    detalle: string;

    @Column({ name: 'Fecha_Actualizacion' })
    fechaActualizacion: Date;

    @ManyToOne(type => Personas, persona => persona.observaciones)
    @JoinColumn({ name: 'Dni' })
    persona: Personas;

}