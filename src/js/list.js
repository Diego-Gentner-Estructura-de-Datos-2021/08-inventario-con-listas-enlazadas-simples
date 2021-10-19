export default class List {
   
    constructor() {
        this._products = 'Deprecated legacy function';
        this.inicio = null;
    }
  
    addProduct(product) {
        let pos = this._validateDuplicate(product);

        if (pos == true) {
                return null;
        } else {
            this._products[product.getId() - 1] = (product);
            return true;
        }
    }

    _validateDuplicate(product) {
        let x = 0;
        let pos = false;

        if (product != null || product != undefined) {
            while (this._products.length > 0 && x < this._products.length && pos == false) {

                if (this._products[x] != undefined) {
                    if (product.getId() === this._products[x].getId()) {
                        pos = true;
                        console.log('validation process...');
                    } else {
                        pos = false;
                        console.log('validation process...');
                    }
                }    
                
                x++;
            }            
        }
        return pos;
    }

    _searchItem(id, typeOf) {
        let answer = false;

        this._products.forEach(element => {
            if (element != null || element != undefined) {
                console.log(`${element.getId()} y ${Number(id)}`)
                if (element.getId() == Number(id)) {
                    return answer = element;
                } 
            }
        });
        if (typeOf != true) {
            // this.updateSearchResults(id, answer);   
        }
        return answer;
    }

    getProducts() {
        return this.inicio;
    }












    // Listas Enlazadas


    agregar(nuevo){

        let validate = this.buscar(nuevo.getId());
        console.log(validate);

        if (validate != null) {
            return null;
        }

        if (this.inicio==null)
          this.inicio=nuevo;
        else             
          this._agregar(nuevo,this.inicio); //arrancar recursividad
    }

    _agregar(nuevo,nodo){
        if (nodo.siguiente==null)
          nodo.siguiente=nuevo;//c3->D4
        else             
          this._agregar(nuevo,nodo.siguiente);
    }

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
                    
                    
    buscar(id){
    let temp=this.inicio;
    while(temp!=null){
        if(temp.id==id)
        return temp;
        temp=temp.siguiente;
    }
    return null;
    }

    eliminar(id){
        let elim=null;
    
        if (id==this.inicio.id){
          elim=this.inicio;
            this.inicio=this.inicio.siguiente;
          elim.siguiente=null;
          return elim;
        }
    
        let temp=this.inicio;
    
        while(temp.siguiente != null ){
    
          if (temp.siguiente.id==id)
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