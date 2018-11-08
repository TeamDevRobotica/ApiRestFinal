import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Provincias } from "./Provincias";


@Entity()
export class Paises {

    @PrimaryGeneratedColumn({ name: "Id_Pais" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @OneToMany(type => Provincias, provincia => provincia.pais)
    provincias: Provincias[];

}