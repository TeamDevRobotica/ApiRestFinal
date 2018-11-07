import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { UserAppNivel } from "./UserAppNivel";

@Entity()
export class UserApp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    apellidoYNombre: string;

    @Column()
    dni: number;

    @Column({ name: "nombreUsuario" })
    nombreUsuario: string;

    @Column({ name: "claveUsuario"})
    claveUsuario: string;

    @OneToOne(type => Tutores, tutor => tutor.userapp)
    @JoinColumn()
    tutorDniTutor: Tutores;

    @ManyToOne(type => UserAppNivel, nivelUserApp => nivelUserApp.users)
    nivelId: UserAppNivel;

}
