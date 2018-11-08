import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Localidades {

    @PrimaryGeneratedColumn({ name: "Id_Localidad" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @Column({ name: "Id_Departamento"})
    departamente: number;
}