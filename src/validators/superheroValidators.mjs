import { body, param } from "express-validator";

//validaciones para crear un superheroe
export const heroValidator = [
  body("nombreSuperheroe")
    .notEmpty()
    .trim()
    .withMessage("Este campo (nombre del superhéroe) es requerido")
    .bail() //detiene validaciones si "notEmpty" falla
    .isLength({ min: 3, max: 60 })
    .withMessage("El nombre del superhéroe debe tener entre 3 y 60 caracteres")
    .custom((nombreSuperheroe) => {
      //comprueba si el campo contiene números
      if (/\d/.test(nombreSuperheroe)) {
        throw new Error("El nombre del superhéroe no puede ser un número");
      }
      return true;
    }),

  body("nombreReal")
    .notEmpty()
    .withMessage("Este campo (nombre real) es requerido")
    .trim()
    .bail() //detiene validaciones si "notEmpty" falla
    .isLength({ min: 3, max: 60 })
    .withMessage("El nombre real debe tener entre 3 y 60 caracteres")
    .custom((nombreReal) => {
      if (/\d/.test(nombreReal)) {
        // Valida que no tenga números
        throw new Error("El nombre real no puede contener números");
      }
      return true;
    }),

  body("edad")
    .notEmpty()
    .withMessage("Este campo (edad) es requerido")
    .bail() //detiene validaciones si "notEmpty" falla
    .isNumeric()
    .isInt({ min: 0 })
    .withMessage("La edad debe ser un numero mayor o igual a 0")
    .escape(),

  body("poderes")
    .notEmpty()
    .withMessage("Este campo (poderes) es requerido")
    .bail() //detiene validaciones si "notEmpty" falla
    .isArray({ min: 1 })
    .withMessage("Debe ingresar al menos un poder") // Verifica que sea un array con al menos 1 elemento
    .custom((poderes) => {
      if (
        poderes.some(
          (poder) => typeof poder !== "string" || poder.trim() === ""
        )
      ) {
        throw new Error("Cada poder debe ser un texto válido");
      }
      return true;
    })
    .escape(),
];

//validaciones para actualizar un superheroe

export const idHeroValidator = [
  param("id")
    .trim()
    .isMongoId()
    .withMessage("El ID ingresado es inválido")
    .escape(),
];

export const nameHeroValidator = [
  param("nombreSuperheroe")
    .trim()
    .isString()
    .withMessage("El nombre del superheroe ingresado debe ser un texto")
    .custom((name) => {
      if (/\d/.test(name)) {
        // Valida que no tenga números
        throw new Error("El nombre del superheroe no puede contener números");
      }
      return true;
    })
];
