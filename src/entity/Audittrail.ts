import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("audittrail",{schema:"control"})
export class Audittrail {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"datetime"
        })
    datetime:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"script"
        })
    script:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"user"
        })
    user:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"action"
        })
    action:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"table"
        })
    table:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"field"
        })
    field:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"keyvalue"
        })
    keyvalue:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"oldvalue"
        })
    oldvalue:string | null;
        

    @Column("longtext",{ 
        nullable:true,
        name:"newvalue"
        })
    newvalue:string | null;
        
}
