import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("observacion_persona",{schema:"control"})
@Index("RefPersonas16",["Dni",])
export class ObservacionPersona {

    @PrimaryGeneratedColumn({ 
        name:"Id_Observacion"
        })
    Id_Observacion:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Dni"
        })
    Dni:number;
        

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
        
}
