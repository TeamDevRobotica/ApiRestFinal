import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("userlevels",{schema:"control"})
export class Userlevels {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"userlevelid"
        })
    userlevelid:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"userlevelname"
        })
    userlevelname:string;
        
}
