import { UserController } from "./controller/UserController";
import { PersonaControlador } from "./controller/PersonaControlador";
import { TutorControlador } from "./controller/TutorControlador";

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
}];