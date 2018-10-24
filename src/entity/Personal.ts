import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("personal",{schema:"control"})
@Index("RefCargo_Persona92",["Id_Cargo",])
@Index("RefDepartamento116",["Id_Departamento",])
@Index("RefEstado_Civil38",["Id_Estado_Civil",])
@Index("RefEstado_Persona7",["Id_Estado",])
@Index("RefLocalidades6",["Id_Localidad",])
@Index("RefProvincias5",["Id_Provincia",])
@Index("RefSexo_Personas2",["Id_Sexo",])
export class Personal {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"Dni"
        })
    Dni:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:400,
        name:"Apellidos_Nombres"
        })
    Apellidos_Nombres:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:5,
        name:"Edad"
        })
    Edad:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:40,
        name:"Domicilio"
        })
    Domicilio:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        name:"Tel_Contacto"
        })
    Tel_Contacto:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:18,
        name:"Fecha_Nac"
        })
    Fecha_Nac:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:30,
        name:"Cuil"
        })
    Cuil:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:200,
        name:"Lugar_Nacimiento"
        })
    Lugar_Nacimiento:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"Fecha_Actualizacion"
        })
    Fecha_Actualizacion:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:18,
        name:"Usuario"
        })
    Usuario:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:8,
        name:"Cod_Postal"
        })
    Cod_Postal:string | null;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Sexo"
        })
    Id_Sexo:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Departamento"
        })
    Id_Departamento:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Provincia"
        })
    Id_Provincia:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Localidad"
        })
    Id_Localidad:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Estado"
        })
    Id_Estado:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Estado_Civil"
        })
    Id_Estado_Civil:number;
        

    @Column("int",{ 
        nullable:false,
        name:"Id_Cargo"
        })
    Id_Cargo:number;
        

    @Column("text",{ 
        nullable:true,
        name:"Foto"
        })
    Foto:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:300,
        name:"Email"
        })
    Email:string | null;
        

    @Column("date",{ 
        nullable:false,
        name:"Fecha_Ingreso"
        })
    Fecha_Ingreso:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100,
        name:"Tel_Contacto2"
        })
    Tel_Contacto2:string | null;
        
}