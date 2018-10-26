import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { NivelUserApp } from "./NivelUserApp";

@Entity()
export class UserApp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreUsuario: string;

    @Column()
    claveUsuario: string;

    @OneToOne(type => Tutores, tutor => tutor.userapp)
    @JoinColumn()
    tutor: Tutores;

    @ManyToOne(type => NivelUserApp, nivelUserApp => nivelUserApp.users)
    nivel: NivelUserApp;

}
