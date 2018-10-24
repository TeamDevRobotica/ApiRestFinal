import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("userlevelpermissions",{schema:"control"})
export class Userlevelpermissions {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"userlevelid"
        })
    userlevelid:number;
        

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"tablename"
        })
    tablename:string;
        

    @Column("int",{ 
        nullable:false,
        name:"permission"
        })
    permission:number;
        
}
