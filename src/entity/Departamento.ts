import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("departamento",{schema:"control"})
@Index("RefProvincias112",["Id_Provincia",])
export class Departamento {

    @PrimaryGeneratedColumn({ 
        name:"Id_Departamento"
        })
    Id_Departamento:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Nombre"
        })
    Nombre:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Provincia"
        })
    Id_Provincia:number;
        
}
