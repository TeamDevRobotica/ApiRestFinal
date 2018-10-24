import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("horarios_trayectos",{schema:"control"})
export class HorariosTrayectos {

    @PrimaryGeneratedColumn({ 
        name:"Id_Horario"
        })
    Id_Horario:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"Id_Trayecto"
        })
    Id_Trayecto:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"Id_Division"
        })
    Id_Division:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"Id_Cohorte"
        })
    Id_Cohorte:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Turno"
        })
    Id_Turno:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Nombre_Dia"
        })
    Nombre_Dia:string | null;
        

    @Column("double",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"Horario_Entrada"
        })
    Horario_Entrada:number | null;
        

    @Column("double",{ 
        nullable:true,
        precision:10,
        scale:2,
        name:"Horario_Salida"
        })
    Horario_Salida:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:500,
        name:"Observacion"
        })
    Observacion:string | null;
        

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
