import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("carnet_alumnos2",{schema:"control"})
export class CarnetAlumnos2 {

    @Column("text",{ 
        nullable:true,
        name:"Foto"
        })
    Foto:string | null;
        

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
        length:100,
        name:"Tiene_Carnet"
        })
    Tiene_Carnet:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:18,
        name:"Usuario"
        })
    Usuario:string | null;
        
}
