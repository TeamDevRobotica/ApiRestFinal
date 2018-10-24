import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("buscar_alumnos_ausentes",{schema:"control"})
export class BuscarAlumnosAusentes {

    @Column("date",{ 
        nullable:false,
        primary:true,
        default:"1999-01-10",
        name:"Fecha"
        })
    Fecha:string;
        

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
        
}
