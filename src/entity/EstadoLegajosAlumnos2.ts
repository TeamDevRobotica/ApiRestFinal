import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("estado_legajos_alumnos2",{schema:"control"})
export class EstadoLegajosAlumnos2 {

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Apellidos_Nombres"
        })
    Apellidos_Nombres:string | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Dni"
        })
    Dni:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Trayecto"
        })
    Id_Trayecto:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Division"
        })
    Id_Division:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Turno"
        })
    Id_Turno:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"Id_Estado"
        })
    Id_Estado:number | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Fotocopia_DNI"
        })
    Fotocopia_DNI:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Carga_Web"
        })
    Carga_Web:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Ficha_Alumno"
        })
    Ficha_Alumno:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Certificado_Medico"
        })
    Certificado_Medico:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Autorizacion_Imagen"
        })
    Autorizacion_Imagen:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Partida_Nacimiento"
        })
    Partida_Nacimiento:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Usuario"
        })
    Usuario:string | null;
        
}
