import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("turno",{schema:"control"})
export class Turno {

    @PrimaryGeneratedColumn({ 
        name:"Id_Turno"
        })
    Id_Turno:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
