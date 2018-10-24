import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("localidades",{schema:"control"})
@Index("RefDepartamento113",["Id_Departamento",])
export class Localidades {

    @PrimaryGeneratedColumn({ 
        name:"Id_Localidad"
        })
    Id_Localidad:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Nombre"
        })
    Nombre:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Departamento"
        })
    Id_Departamento:number;
        
}
