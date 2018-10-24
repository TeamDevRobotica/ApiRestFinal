import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("asistencia_alumnos",{schema:"control"})
export class AsistenciaAlumnos {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Dni"
        })
    Dni:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Apellidos_Nombres"
        })
    Apellidos_Nombres:string | null;
        

    @Column("date",{ 
        nullable:false,
        primary:true,
        default:"1999-01-10",
        name:"Fecha"
        })
    Fecha:string;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Estado_Asis"
        })
    Id_Estado_Asis:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:18,
        name:"Usuario"
        })
    Usuario:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"Hora"
        })
    Hora:string | null;
        
}
