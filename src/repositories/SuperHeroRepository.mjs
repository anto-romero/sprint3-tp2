import SuperHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, "i") };
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: "Tierra",
      $expr: { $gte: [{ $size: "$poderes" }, 2] },
    });
  }

  //crear heroe
  async crearHeroe({
    nombreSuperheroe,
    nombreReal,
    edad,
    planetaOrigen,
    debilidad,
    poderes,
    aliados,
    enemigos,
    autor,
  }) {
    const hero = new SuperHero({
      nombreSuperheroe: nombreSuperheroe,
      nombreReal: nombreReal,
      edad: edad,
      planetaOrigen: planetaOrigen,
      debilidad: debilidad,
      poderes: poderes,
      aliados: aliados,
      enemigos: enemigos,
      autor: autor,
    });

    console.log(hero);
    
    return await hero.save();
  }

  //actualizar heroe
  async actualizarHeroe(id, data) {
    const { edad, nombreReal, planetaOrigen } = data;
    console.log(data);
    
    return await SuperHero.findByIdAndUpdate(id, {
      $set: {
        edad: edad,
        nombreReal: nombreReal,
        planetaOrigen: planetaOrigen,
      },
    });
  }

  /* async actualizarDatos(id, data) {
    const {
      nombreSuperheroe: nombreSuperheroe,
      nombreReal: nombreReal,
      edad: edad,
      planetaOrigen: planetaOrigen,
      debilidad: debilidad,
      poderes: poderes,
      enemigos: enemigos,
      aliados: aliados,
      autor: autor,
    } = data;

    return await SuperHero.findByIdAndUpdate(id, {
      $set: {
        nombreSuperheroe,
        nombreReal,
        edad,
        planetaOrigen,
        debilidad,
        poderes,
        enemigos,
        aliados,
        autor,
      },
    });
  }*/

  //eliminar heroe por ID
  async eliminarHeroe(id) {
    const deleteHero = await SuperHero.findByIdAndDelete(id);
    console.log(deleteHero);
    
    return deleteHero;
  }

  //eliminar heroe por nombre
  async eliminarHeroePorNombre(nombreSuperheroe) {
    console.log(nombreSuperheroe);

    const deleteHeroByName = await SuperHero.findOneAndDelete({
      nombreSuperheroe: new RegExp(`^${nombreSuperheroe}$`, "i"),
    });
    console.log(deleteHeroByName);

    return deleteHeroByName;
  }
}

export default new SuperHeroRepository();
