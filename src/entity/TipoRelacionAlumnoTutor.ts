import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tipo_relacion_alumno_tutor",{schema:"control"})
export class TipoRelacionAlumnoTutor {

    @PrimaryGeneratedColumn({ 
        name:"Id_Relacion"
        })
    Id_Relacion:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Desripcion"
        })
    Desripcion:string | null;
        
}
