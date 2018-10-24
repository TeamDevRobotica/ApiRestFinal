import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("dias_laborables",{schema:"control"})
export class DiasLaborables {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:100,
        default:"",
        name:"Nombre_Dia"
        })
    Nombre_Dia:string;
        
}
