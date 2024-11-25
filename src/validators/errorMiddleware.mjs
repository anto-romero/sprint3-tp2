import { validationResult } from "express-validator";

export const superheroValidator = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      //transformamos la lista de errores en un formato mas legible
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    });
  }
  next();
};
