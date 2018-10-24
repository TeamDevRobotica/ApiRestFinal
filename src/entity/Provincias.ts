import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("provincias",{schema:"control"})
@Index("RefPaises114",["Id_Pais",])
export class Provincias {

    @PrimaryGeneratedColumn({ 
        name:"Id_Provincia"
        })
    Id_Provincia:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Nombre"
        })
    Nombre:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Pais"
        })
    Id_Pais:number;
        
}
