import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("ocupacion_tutor",{schema:"control"})
export class OcupacionTutor {

    @PrimaryGeneratedColumn({ 
        name:"Id_Ocupacion"
        })
    Id_Ocupacion:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
