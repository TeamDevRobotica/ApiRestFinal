import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Provincias {

    @PrimaryGeneratedColumn({ name: "Id_Provincia" })
    id: number;

    @Column({ name: "Nombre" })
    nombre: string;

    @Column({ name: "Id_Pais"})
    pais:number;
}