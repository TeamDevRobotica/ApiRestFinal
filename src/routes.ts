import { UserController } from "./controller/UserController";
import { PersonaControlador } from "./controller/PersonaControlador";
import { TutorControlador } from "./controller/TutorControlador";
import { PreinscripcionControlador } from "./controller/PreinscripcionControlador";
import { TurnoControlador } from "./controller/TurnoControlador";
import { PaisControlador } from "./controller/PaisControlador";

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
    route: "/tutores/:id",
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
}];