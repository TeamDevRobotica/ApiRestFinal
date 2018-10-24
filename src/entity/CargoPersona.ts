import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("cargo_persona",{schema:"control"})
export class CargoPersona {

    @PrimaryGeneratedColumn({ 
        name:"Id_Cargo"
        })
    Id_Cargo:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Nombre"
        })
    Nombre:string | null;
        
}
