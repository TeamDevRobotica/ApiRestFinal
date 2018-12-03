import "reflect-metadata";
import { createConnection, FindOperator } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import * as logger from 'morgan';
import * as cors from 'cors';
import { UserController } from "./controller/UserController";
import { useExpressServer } from "routing-controllers";
import { UsuarioControlador } from "./controladores/UsuarioControlador";
import { UsuarioNivelControlador } from "./controladores/UsuarioNivelControlador";
import { TutorControlador } from "./controladores/TutorControlador";
import { RegistroControlador } from "./controladores/RegistroControlador";
import { PersonaControlador } from "./controladores/PersonaControlador";

// creates express app, registers all controller routes and returns you express app instance
let express = require("express"); // or you can import it if you have installed typings
let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
// // app.use() // you can configure it the way you want
useExpressServer(app, {
    cors: true,
    controllers: [__dirname + "/controladores/*.ts"]
    // controllers: [UsuarioControlador, UsuarioNivelControlador, TutorControlador, PersonaControlador, RegistroControlador]
});

const connection = createConnection();
app.listen(3000);
console.log("Express server corriendo en puerto 3000. ");
// createConnection().then(async connection => {

//     // create express app
//     let app = express();
//     app.use(bodyParser.json());
//     app.use(logger('dev'));
//     // var cors = require('cors');

//     app.use(cors());

//     // register express routes from defined application routes

//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next);
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
//             } else if (result !== null && result !== undefined) {
//                 res.json(result);
//             }
//         });
//     });
//     // setup express app here
//     // ...

//     // start express server
//     app.listen(3000);

//     console.log("Express server corriendo en puerto 3000. ");

// }).catch(error => console.log(error));
