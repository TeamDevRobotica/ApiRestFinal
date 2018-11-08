import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Departamento {

    @PrimaryGeneratedColumn({ name: "Id_Departamento" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @Column({ name: "Id_Provincia"})
    provincia: number;
}