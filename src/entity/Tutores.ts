import { Index, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId } from "typeorm";
import { UserApp } from "./UserApp";
import { Personas } from "./Personas";


@Entity("tutores", { schema: "control2" })
export class Tutores {

    @PrimaryColumn("int", {
        nullable: false,
        primary: true,
        default: "0",
        name: "Dni_Tutor"
    })
    Dni_Tutor: number;


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
        length: 20,
        name: "Tel_Contacto"
    })
    Tel_Contacto: string | null;


    @Column("date", {
        nullable: true,
        name: "Fecha_Nac"
    })
    Fecha_Nac: string | null;


    @Column("varchar", {
        nullable: true,
        length: 25,
        name: "Cuil"
    })
    Cuil: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Lugar_Nacimiento"
    })
    Lugar_Nacimiento: string | null;


    @Column("varchar", {
        nullable: true,
        length: 60,
        name: "MasHijos"
    })
    MasHijos: string | null;


    @Column("date", {
        nullable: true,
        name: "Fecha_Actualizacion"
    })
    Fecha_Actualizacion: string | null;


    @Column("varchar", {
        nullable: true,
        length: 60,
        name: "Usuario"
    })
    Usuario: string | null;


    @Column("int", {
        nullable: false,
        name: "Id_Estado_Civil"
    })
    Id_Estado_Civil: number;


    @Column("int", {
        nullable: false,
        name: "Id_Sexo"
    })
    Id_Sexo: number;


    @Column("int", {
        nullable: false,
        name: "Id_Relacion"
    })
    Id_Relacion: number;


    @Column("int", {
        nullable: false,
        name: "Id_Ocupacion"
    })
    Id_Ocupacion: number;


    @Column("int", {
        nullable: false,
        name: "Id_Provincia"
    }) 2
    Id_Provincia: number;


    @Column("int", {
        nullable: false,
        name: "Id_Localidad"
    })
    Id_Localidad: number;


    @Column("int", {
        nullable: false,
        name: "Id_Departamento"
    })
    Id_Departamento: number;

    @OneToOne(type => UserApp, userApp => userApp.tutor)
    @JoinColumn()
    userapp: UserApp;

    @OneToMany(type => Personas, hijo => hijo.tutor)
    @JoinColumn({ name: "Dni_Tutor" })
    hijos: Personas[];

}
