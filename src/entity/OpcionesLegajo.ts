import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("opciones_legajo",{schema:"control"})
export class OpcionesLegajo {

    @PrimaryGeneratedColumn({ 
        name:"Id_Opcion"
        })
    Id_Opcion:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Detalle"
        })
    Detalle:string | null;
        
}
