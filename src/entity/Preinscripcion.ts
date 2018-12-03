import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Preinscripcion {

    @PrimaryGeneratedColumn({ name: "Id_Preinscripcion" })
    id: number;

    @Column({ name: "Turno" })
    turno: number;

    @Column({ name: "Apellido_Nombre" })
    apellidoYNombre: string;

    @Column({ name: "Dni" })
    dni: number;

    @Column({ name: "Fecha_Nacimiento" })
    fechaNacimiento: Date;

    @Column({ name: "Nacionalidad" })
    nacionalidad: number;

    @Column({ name: "Provincia" })
    provincia: number;

    @Column({ name: "Localidad" })
    localidad: number;

    @Column({ name: "Direccion" })
    direccion: string;

    @Column({ name: "Apellido_Nombre_Tutor" })
    apellidoYNombreTutor: string;

    @Column({ name: "Dni_Tutor" })
    dniTutor: number;

    @Column({ name: "Email_Contacto" })
    email: string;

    @Column({ name: "Tel_Contacto" })
    tel: string;

    @Column({ name: "Observacion" })
    observacion: string;

    constructor(turno: number, apellidoYNombre: string, dni: number, fechaNacimiento: Date, nacionalidad: number, provincia: number, localidad: number, direccion: string, apellidoYNombreTutor: string, dniTutor: number, email: string, tel: string, observacion: string) {
        this.turno = turno;
        this.apellidoYNombre = apellidoYNombre;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.provincia = provincia;
        this.localidad = localidad;
        this.apellidoYNombreTutor = apellidoYNombreTutor;
        this.dniTutor = dniTutor;
        this.email = email;
        this.tel = tel;
        this.observacion = observacion;
    }
}