class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo' no implementado");
  }

  obtenerMayores30() {
    throw new Error("Método 'obtenerMayores30' no implementado");
  }

  crearHeroe() {
    throw new Error ("Método 'crearHeroe' no implementado")
  }

  actualizarHeroe() {
    throw new Error ("Método 'actualizarHeroe' no implementado")
  }

  eliminarHeroePorId(){
    throw new Error ("Método 'eliminarHeroePorId' no implementado")
  }

  eliminarHeroePorNombre(){
    throw new Error ("Método 'eliminarHeroePorNombre' no implementado")
  }
}

export default IRepository;
