export default class Grupo{

    constructor(){
        this.inicio=null;
    }

  agregar(nuevo){
    if (this.inicio==null)
      this.inicio=nuevo;
    else             
      this._agregar(nuevo,this.inicio); //arrancar recursividad
  }//fin    
  
  _agregar(nuevo,nodo){
    if (nodo.siguiente==null)
      nodo.siguiente=nuevo;//c3->D4
    else             
      this._agregar(nuevo,nodo.siguiente);
  }//D4,C3     D4,B2   D4 A1

  listar2(){
    let texto='';
    if (!this.inicio)
      return '';
    let temp=this.inicio;
    while(temp!=null){
      texto += temp.info() + '\n';
      temp=temp.siguiente;
    }
    return texto;
  }

  listar(){
    if (!this.inicio)
      return '';
    else
      return this._listarRec(this.inicio);
  }

  _listarRec(n){
    if (n.siguiente==null)
      return n.info();
    else
      return n.info() + '\n' + this._listarRec(n.siguiente);
  }                
                  
  buscar(nombre){
    let temp=this.inicio;
    while(temp!=null){
      if(temp.nombre==nombre)
        return temp;
      temp=temp.siguiente;
    }
    return null;
  }

  insertar(nuevo,pos){
   
    insertar((V),3)
  }

  eliminar(nombre){
    let elim=null;

    if (nombre==this.inicio.nombre){
      elim=this.inicio;
	    this.inicio=this.inicio.siguiente;
      elim.siguiente=null;
      return elim;
    }

    let temp=this.inicio;

    while(temp.siguiente != null ){

      if (temp.siguiente.nombre==nombre)
      {
        elim=temp.siguiente;
        temp.siguiente=temp.siguiente.siguiente;
        elim.siguiente=null;
        return elim;
      } else
        temp=temp.siguiente;
    }
    return elim;
  }
}