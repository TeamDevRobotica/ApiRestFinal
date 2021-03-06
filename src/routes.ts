import { UserController } from "./controller/UserController";
import { PersonaControlador } from "./controller/PersonaControlador";
import { TutorControlador } from "./controller/TutorControlador";
import { PreinscripcionControlador } from "./controller/PreinscripcionControlador";
import { TurnoControlador } from "./controller/TurnoControlador";
import { PaisControlador } from "./controller/PaisControlador";
import { ProvinciaControlador } from "./controller/ProvinciaControlador";
import { DepartamentoControlador } from "./controller/DepartamentoControlador";
import { LocalidadControlador } from "./controller/LocalidadControlador";
import { UserAppNivelControlador } from "./controller/UserAppNivelControlador";
import { RegistrarUsuario } from "./controller/RegistrarUsuario";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users",
    controller: UserController,
    action: "remove"
}, {
    // url para loguin
    method: "get",
    route: "/loguin/:usuario/:clave",
    controller: UserController,
    action: "loguin"
}, {
    // url para registrar
    method: "post",
    route: "/registrar",
    controller: RegistrarUsuario,
    action: "registrar"
},
///PERSONAS
{
    method: "get",
    route: "/personas",
    controller: PersonaControlador,
    action: "all"
}, {
    method: "get",
    route: "/personas/:id",
    controller: PersonaControlador,
    action: "one"
}, {
    method: "post",
    route: "/personas",
    controller: PersonaControlador,
    action: "save"
}, {
    method: "delete",
    route: "/personas",
    controller: PersonaControlador,
    action: "remove"
},
///TUTORES
{
    method: "get",
    route: "/tutores",
    controller: TutorControlador,
    action: "all"
}, {
    method: "get",
    route: "/tutores/:dni",
    controller: TutorControlador,
    action: "one"
}, {
    method: "post",
    route: "/tutores",
    controller: TutorControlador,
    action: "save"
}, {
    method: "delete",
    route: "/tutores",
    controller: TutorControlador,
    action: "remove"
}, {
    method: "get",
    route: "/tutorSinUsuario/:dni",
    controller: TutorControlador,
    action: "devolverTutorSinUsuario"
}, {
    method: "get",
    route: "/tutorPorUsuario/:id",
    controller: TutorControlador,
    action: "devolverTutorPorIdDeUsuario"
},
//PREINSCRIPCION
{
    method: "get",
    route: "/preinscripcion",
    controller: PreinscripcionControlador,
    action: "all"
}, {
    method: "get",
    route: "/preinscripcion/:id",
    controller: PreinscripcionControlador,
    action: "one"
}, {
    method: "post",
    route: "/preinscripcion",
    controller: PreinscripcionControlador,
    action: "save"
}, {
    method: "delete",
    route: "/preinscripcion",
    controller: PreinscripcionControlador,
    action: "remove"
},
//TURNO
{
    method: "get",
    route: "/turno",
    controller: TurnoControlador,
    action: "all"
}, {
    method: "get",
    route: "/turno/:id",
    controller: TurnoControlador,
    action: "one"
}, {
    method: "post",
    route: "/turno",
    controller: TurnoControlador,
    action: "save"
}, {
    method: "delete",
    route: "/turno",
    controller: TurnoControlador,
    action: "remove"
},
//PAIS
{
    method: "get",
    route: "/pais",
    controller: PaisControlador,
    action: "all"
}, {
    method: "get",
    route: "/pais/:id",
    controller: PaisControlador,
    action: "one"
}, {
    method: "post",
    route: "/pais",
    controller: PaisControlador,
    action: "save"
}, {
    method: "delete",
    route: "/pais",
    controller: PaisControlador,
    action: "remove"
},
//PROVINCIA
{
    method: "get",
    route: "/provincia",
    controller: ProvinciaControlador,
    action: "all"
}, {
    method: "get",
    route: "/provincia/:id",
    controller: ProvinciaControlador,
    action: "one"
}, {
    method: "get",
    route: "/provincia/:idPais",
    controller: ProvinciaControlador,
    action: "buscarProvinciasPais"
}, {
    method: "post",
    route: "/provincia",
    controller: ProvinciaControlador,
    action: "save"
}, {
    method: "delete",
    route: "/provincia",
    controller: ProvinciaControlador,
    action: "remove"
},
//DEPARTAMENTO
{
    method: "get",
    route: "/departamento",
    controller: DepartamentoControlador,
    action: "all"
}, {
    method: "get",
    route: "/departamento/:id",
    controller: DepartamentoControlador,
    action: "one"
}, {
    method: "post",
    route: "/departamento",
    controller: DepartamentoControlador,
    action: "save"
}, {
    method: "delete",
    route: "/departamento",
    controller: DepartamentoControlador,
    action: "remove"
},
//LOCALIDAD
{
    method: "get",
    route: "/localidad",
    controller: LocalidadControlador,
    action: "all"
}, {
    method: "get",
    route: "/localidad/:id",
    controller: LocalidadControlador,
    action: "one"
}, {
    method: "post",
    route: "/localidad",
    controller: LocalidadControlador,
    action: "save"
}, {
    method: "delete",
    route: "/localidad",
    controller: LocalidadControlador,
    action: "remove"
}, {
    // UserAPPNivel
    method: "get",
    route: "/nivel",
    controller: UserAppNivelControlador,
    action: "todosMenosAdmin"
}];