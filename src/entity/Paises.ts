import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Paises {

    @PrimaryGeneratedColumn({ name: "Id_Pais" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

}