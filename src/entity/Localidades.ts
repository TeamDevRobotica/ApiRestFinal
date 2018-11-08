import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Departamento } from "./Departamento";

@Entity()
export class Localidades {

    @PrimaryGeneratedColumn({ name: "Id_Localidad" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @ManyToOne(type => Departamento, departamento => departamento.localidades)
    @JoinColumn({ name: "Id_Departamento" })
    departamento: Departamento;

}