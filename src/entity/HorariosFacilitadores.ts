import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("horarios_facilitadores",{schema:"control"})
export class HorariosFacilitadores {

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"Dni"
        })
    Dni:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"Id_Horario"
        })
    Id_Horario:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:500,
        name:"Observaciones"
        })
    Observaciones:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Usuario"
        })
    Usuario:string | null;
        
}
