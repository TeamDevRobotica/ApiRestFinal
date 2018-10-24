import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cohorte",{schema:"control"})
export class Cohorte {

    @PrimaryGeneratedColumn({ 
        name:"Id_Cohorte"
        })
    Id_Cohorte:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Descripcion"
        })
    Descripcion:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Año_cohorte"
        })
    Año_cohorte:number | null;
        
}
