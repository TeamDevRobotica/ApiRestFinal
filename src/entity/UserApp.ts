import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { UserAppNivel } from "./UserAppNivel";

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

    @ManyToOne(type => UserAppNivel, nivelUserApp => nivelUserApp.users)
    nivel: UserAppNivel;

}
