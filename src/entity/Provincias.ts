import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Paises } from "./Paises";
import { Departamento } from "./Departamento";


@Entity()
export class Provincias {

    @PrimaryGeneratedColumn({ name: "Id_Provincia" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @ManyToOne(type => Paises, pais => pais.provincias)
    @JoinColumn({ name: "Id_Pais" })
    pais: Paises;

    @OneToMany(type => Departamento, departamento => departamento.provincia)
    departamentos: Departamento[];

}