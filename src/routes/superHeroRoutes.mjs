import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  crearNuevoSuperheroeController, //controlador crear superheroe
  actualizarSuperheroeController,
  //actualizarDatosController,
  eliminarSuperheroeController, //controlador eliminar superheroe por ID
  eliminarSuperheroePorNombreController, //controlador eliminar superheroe por nombre
} from "../controllers/superheroesController.mjs";

import { heroValidator, idHeroValidator, nameHeroValidator } from "../validators/superheroValidators.mjs";
import { superheroValidator } from "../validators/errorMiddleware.mjs";
const router = express.Router();

router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);
router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/:atributo/:valor", buscarSuperheroesPorAtributoController);

//nuevos endpoints agregados
router.post(
  "/heroes/crear/nuevo",
  heroValidator, superheroValidator,
  crearNuevoSuperheroeController
);
router.put("/heroes/actualizar/heroe/:id", idHeroValidator, heroValidator, actualizarSuperheroeController);
//router.put("/heroes/actualizar/:id", actualizarDatosController);
router.delete("/heroes/eliminar/:id",idHeroValidator, eliminarSuperheroeController);
router.delete("/heroes/delete/:nombre", nameHeroValidator, eliminarSuperheroePorNombreController);

export default router;
