import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("estado_asistencia",{schema:"control"})
export class EstadoAsistencia {

    @PrimaryGeneratedColumn({ 
        name:"Id_Estado_Asis"
        })
    Id_Estado_Asis:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Detalle"
        })
    Detalle:string | null;
        
}
