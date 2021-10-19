export default class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.siguiente=null;
    }

    info(){
      return ` Nombre: ${this.nombre} (${this.edad})`;
    }

} // Fin de Persona Class