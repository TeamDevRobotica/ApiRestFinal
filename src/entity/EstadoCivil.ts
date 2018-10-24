import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("estado_civil",{schema:"control"})
export class EstadoCivil {

    @PrimaryGeneratedColumn({ 
        name:"Id_Estado_Civil"
        })
    Id_Estado_Civil:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
