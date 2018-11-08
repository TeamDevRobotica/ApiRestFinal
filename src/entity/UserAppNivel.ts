import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Tutores } from "./Tutores";
import { UserApp } from "./UserApp";

@Entity()
export class UserAppNivel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(type => UserApp, user => user.nivel)
    users: UserApp[];

}
