import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("sexo_personas",{schema:"control"})
export class SexoPersonas {

    @PrimaryGeneratedColumn({ 
        name:"Id_Sexo"
        })
    Id_Sexo:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
