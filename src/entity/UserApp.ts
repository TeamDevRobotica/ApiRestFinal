import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Tutores } from "./Tutores";
import { UserAppNivel } from "./UserAppNivel";
import { Personas } from "./Personas";

@Entity()
export class UserApp {

    public constructor(nombreUsuario: string, claveUsuario: string, nivel: UserAppNivel) {
        this.nombreUsuario = nombreUsuario,
            this.claveUsuario = claveUsuario,
            this.nivel = nivel
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreUsuario: string;

    @Column({ nullable: true })
    claveUsuario: string;

    // @OneToOne(type => Tutores, tutor => tutor.userapp, { onUpdate: 'CASCADE', onDelete: "CASCADE" })
    // @JoinColumn({ name: "Dni" })
    // tutor: Tutores;

    // @OneToOne(type => Personas, persona => persona.userapp, { onUpdate: 'CASCADE', onDelete: "CASCADE" })
    // @JoinColumn({ name: "Dni" })
    // alumno: Personas;

    @ManyToOne(type => UserAppNivel, nivelUserApp => nivelUserApp.users)
    @JoinColumn({ name: "Id_Nivel" })
    nivel: UserAppNivel;

}
