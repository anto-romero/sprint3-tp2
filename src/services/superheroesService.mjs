import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
  return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function crearSuperheroe(data) {
  return await SuperHeroRepository.crearHeroe(data);
}

export async function actualizarSuperheroe(id, data) {
  console.log(id, data);

  return SuperHeroRepository.actualizarHeroe(id, data);
}

/*export async function actualizarDatosSuperheroe(id, data) {
  console.log(id, data);
  return SuperHeroRepository.actualizarDatos(id, data);
}*/

export async function eliminarSuperheroe(id) {
  return SuperHeroRepository.eliminarHeroe(id);
}

export async function eliminarSuperheroePorNombre(name) {
  return SuperHeroRepository.eliminarHeroePorNombre(name);
}