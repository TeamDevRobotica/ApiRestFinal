import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("paises",{schema:"control"})
export class Paises {

    @PrimaryGeneratedColumn({ 
        name:"Id_Pais"
        })
    Id_Pais:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Nombre"
        })
    Nombre:string | null;
        
}
