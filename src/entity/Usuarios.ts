import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("usuarios",{schema:"control"})
export class Usuarios {

    @Column("varchar",{ 
        nullable:true,
        length:300,
        name:"Apellido_Nombre"
        })
    Apellido_Nombre:string | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"Dni"
        })
    Dni:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        default:"",
        name:"Usuario"
        })
    Usuario:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Password"
        })
    Password:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Nivel_Usuario"
        })
    Nivel_Usuario:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        
}
