import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("division",{schema:"control"})
export class Division {

    @PrimaryGeneratedColumn({ 
        name:"Id_Division"
        })
    Id_Division:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Trayecto"
        })
    Id_Trayecto:number | null;
        
}
