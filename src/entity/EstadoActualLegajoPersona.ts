import { Index, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId } from "typeorm";


@Entity("estado_actual_legajo_persona", { schema: "control" })
export class EstadoActualLegajoPersona {

    @Column("int", {
        nullable: false,
        primary: true,
        name: "Dni"
    })
    Dni: number;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Carga_Web"
    })
    Carga_Web: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Partida_Nacimiento"
    })
    Partida_Nacimiento: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Fotocopia_DNI"
    })
    Fotocopia_DNI: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Certificado_Medico"
    })
    Certificado_Medico: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Ficha_Alumno"
    })
    Ficha_Alumno: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Autorizacion_Imagen"
    })
    Autorizacion_Imagen: string | null;


    @Column("text", {
        nullable: true,
        name: "Archivos Varios"
    })
    Archivos_Varios: string | null;


    @Column("date", {
        nullable: true,
        name: "Fecha_Actualizacion"
    })
    Fecha_Actualizacion: string | null;


    @Column("varchar", {
        nullable: true,
        length: 100,
        name: "Usuario"
    })
    Usuario: string | null;

}
