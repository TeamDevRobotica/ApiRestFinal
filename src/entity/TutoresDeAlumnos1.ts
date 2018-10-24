import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("tutores_de_alumnos1",{schema:"control"})
export class TutoresDeAlumnos1 {

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Apellidos_Nombres"
        })
    Apellidos_Nombres:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Dni"
        })
    Dni:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Trayecto"
        })
    Id_Trayecto:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Division"
        })
    Id_Division:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Turno"
        })
    Id_Turno:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Estado"
        })
    Id_Estado:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Apellidos_Nombres1"
        })
    Apellidos_Nombres1:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Dni_Tutor"
        })
    Dni_Tutor:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Relacion"
        })
    Id_Relacion:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:60,
        name:"Usuario"
        })
    Usuario:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        
}
