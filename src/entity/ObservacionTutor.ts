import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("observacion_tutor",{schema:"control"})
@Index("RefTutores33",["Dni_Tutor",])
export class ObservacionTutor {

    @PrimaryGeneratedColumn({ 
        name:"Id_Observacion"
        })
    Id_Observacion:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:500,
        name:"Detalle"
        })
    Detalle:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"Dni_Tutor"
        })
    Dni_Tutor:number;
        
}
