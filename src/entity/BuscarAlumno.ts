import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("buscar_alumno",{schema:"control"})
export class BuscarAlumno {

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Apellido_Nombres"
        })
    Apellido_Nombres:string | null;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        default:"0",
        name:"Dni"
        })
    Dni:number;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Trayecto"
        })
    Id_Trayecto:number | null;
        
}
