import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("estado_persona",{schema:"control"})
export class EstadoPersona {

    @PrimaryGeneratedColumn({ 
        name:"Id_Estado"
        })
    Id_Estado:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Descripcion"
        })
    Descripcion:string | null;
        
}
