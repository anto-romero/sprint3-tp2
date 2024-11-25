import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
  crearSuperheroe,
  actualizarSuperheroe,
  //actualizarDatosSuperheroe,
  eliminarSuperheroe,
  eliminarSuperheroePorNombre,
} from "../services/superheroesService.mjs";

import {
  renderizarSuperheroe,
  rendizarListaSuperheroes,
} from "../views/responsiveView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroe = await obtenerSuperheroePorId(id);

  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroes();

  res.send(rendizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(rendizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();

  res.send(rendizarListaSuperheroes(superheroes));
}

//Funcion para crear un nuevo superheroe
export async function crearNuevoSuperheroeController(req, res) {
  try {
    const data = req.body;
    const newHero = await crearSuperheroe(data);
    const response = renderizarSuperheroe(newHero);

    return res.send(response);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).send(error.message);
  }
}

//funcion para actualizar datos de un superheroe
export async function actualizarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const heroeActualizado = await actualizarSuperheroe(id, data);

    res.status(200).json({
      message: `Superheroe con ID: ${id}, ha sido actualizado.}`,
      data: heroeActualizado,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

/*export async function actualizarDatosController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const superheroeActualizado = await actualizarDatosSuperheroe(id, data);
    res.send(
      `Superheroe con ID: ${id} ha sido actualizado con los datos: ${JSON.stringify(
        superheroeActualizado
      )}`
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
} */

//funcion para eliminar por ID un superheroe
export async function eliminarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const deletedHero = await eliminarSuperheroe(id);

    res.status(200).json({
      message: `Superheroe con ID: ${id}, ha sido eliminado.}`,
      data: deletedHero,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//funcion para eliminar heroe por nombre
export async function eliminarSuperheroePorNombreController(req, res) {
  try {
    const { nombre } = req.params;

    const deleteHeroByName = await eliminarSuperheroePorNombre(nombre);
    console.log(deleteHeroByName);

    res.status(200).json({
      message: `Superheroe con nombre: ${nombre}, ha sido eliminado.}`,
      data: deleteHeroByName,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
