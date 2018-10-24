import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("trayectos",{schema:"control"})
export class Trayectos {

    @PrimaryGeneratedColumn({ 
        name:"Id_Trayecto"
        })
    Id_Trayecto:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
