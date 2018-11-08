import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Provincias } from "./Provincias";
import { Localidades } from "./Localidades";


@Entity()
export class Departamento {

    @PrimaryGeneratedColumn({ name: "Id_Departamento" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @ManyToOne(type => Provincias, provincia => provincia.departamentos)
    @JoinColumn({ name: "Id_Provincia" })
    provincia: Provincias;

    @OneToMany(type => Localidades, localidad => localidad.departamento)
    localidades: Localidades[];

}