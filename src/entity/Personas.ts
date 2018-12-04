import { Index, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId } from "typeorm";
import { Tutores } from "./Tutores";
import { ObservacionPersona } from "./ObservacionPersona";
import { NotificacionPersona } from "./NotificacionPersona";
import { HorariosTrayectos } from "./HorariosTrayectos";
import { UserApp } from "./UserApp";

@Entity("personas")
export class Personas {

    @PrimaryColumn("int", {
        nullable: false,
        primary: true,
        name: "Dni"
    })
    Dni: number;


    @Column("varchar", {
        nullable: true,
        length: 400,
        name: "Apellidos_Nombres"
    })
    Apellidos_Nombres: string | null;


    @Column("varchar", {
        nullable: true,
        length: 5,
        name: "Edad"
    })
    Edad: string | null;


    @Column("varchar", {
        nullable: true,
        length: 40,
        name: "Domicilio"
    })
    Domicilio: string | null;


    @Column("varchar", {
        nullable: true,
        length: 30,
        name: "Tel_Contacto"
    })
    Tel_Contacto: string | null;


    @Column("varchar", {
        nullable: true,
        length: 18,
        name: "Fecha_Nac"
    })
    Fecha_Nac: string | null;


    @Column("varchar", {
        nullable: true,
        length: 30,
        name: "Cuil"
    })
    Cuil: string | null;


    @Column("varchar", {
        nullable: true,
        length: 200,
        name: "Lugar_Nacimiento"
    })
    Lugar_Nacimiento: string | null;


    @Column("date", {
        nullable: true,
        name: "Fecha_Actualizacion"
    })
    Fecha_Actualizacion: string | null;


    @Column("varchar", {
        nullable: true,
        length: 18,
        name: "Usuario"
    })
    Usuario: string | null;


    @Column("varchar", {
        nullable: true,
        length: 8,
        name: "Cod_Postal"
    })
    Cod_Postal: string | null;


    @Column("varchar", {
        nullable: true,
        length: 60,
        name: "Repitente"
    })
    Repitente: string | null;


    @Column("int", {
        nullable: false,
        name: "Id_Sexo"
    })
    Id_Sexo: number;


    @Column("int", {
        nullable: false,
        name: "Id_Departamento"
    })
    Id_Departamento: number;


    @Column("int", {
        nullable: false,
        name: "Id_Provincia"
    })
    Id_Provincia: number;


    @Column("int", {
        nullable: false,
        name: "Id_Localidad"
    })
    Id_Localidad: number;


    @Column("int", {
        nullable: false,
        name: "Id_Estado"
    })
    Id_Estado: number;


    // @Column("int", {
    //     nullable: false,
    //     name: "Id_Horario"
    // })
    // Id_Horario: number;


    @Column("int", {
        nullable: false,
        name: "Id_Estado_Civil"
    })
    Id_Estado_Civil: number;


    // // @Column("int", {
    // //     nullable: false,
    // //     name: "Dni_Tutor"
    // // })\
    // @ManyToOne(type => Tutores/* , tutor => tutor.hijos */)
    // Dni_Tutor: number;



    @Column("int", {
        nullable: false,
        name: "Id_Cargo"
    })
    Id_Cargo: number;


    @Column("text", {
        nullable: true,
        name: "Foto"
    })
    Foto: string | null;


    @Column("varchar", {
        nullable: true,
        length: 300,
        name: "Email"
    })
    Email: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        default: "SI",
        name: "Tiene_Carnet"
    })
    Tiene_Carnet: string | null;


    @OneToMany(type => ObservacionPersona, observacion => observacion.persona)
    observaciones: ObservacionPersona[];

    @OneToMany(type => NotificacionPersona, notificacion => notificacion.persona)
    notificaciones: NotificacionPersona[];

    @ManyToOne(type => Tutores, tutor => tutor.hijos)
    @JoinColumn({ name: "Dni_Tutor" })
    tutor: Tutores;

    @ManyToOne(type => HorariosTrayectos, horario => horario.personas)
    @JoinColumn({ name: "Id_Horario" })
    horario: HorariosTrayectos;

    @OneToOne(type => UserApp)
    @JoinColumn({ name: "Id_UserApp" })
    userapp: UserApp;
}
