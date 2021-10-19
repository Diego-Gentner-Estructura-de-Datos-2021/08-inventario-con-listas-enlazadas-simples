import Product from './product.js';
import List from './list.js';
import UpdateHTML from './update-html.js'

let max = 0;

class App {

    constructor() {

    this._list = new List();
    this._htmlDocument = new UpdateHTML(this._list.getProducts());

    this._btnAdd = document.querySelector('#btnAdd');
    this._btnSearch = document.querySelector('#btnSearch');
    this._btnDelete = document.querySelector('#btnDelete');
    this._btnInvert = document.querySelector('#btnInvert');
    this._btnDeleteHistory = document.querySelector('#btnDeleteHistory');
    
    this._btnAdd.addEventListener('click', this.readForm);
    this._btnSearch.addEventListener('click', this.searchForm);
    this._btnDelete.addEventListener('click', this.deleteForm);
    this._btnInvert.addEventListener('click', this._htmlDocument.invertList);
    this._btnDeleteHistory.addEventListener('click', this._htmlDocument.deleteSearchHistory);

    }
    

    readForm = () => {

        let product;
        // Variables Read
        let inputId = document.querySelector('#id');
        let inputName = document.querySelector('#name');
        let inputQuantity = document.querySelector('#quantity');
        let inputPrice = document.querySelector('#price');

        let id = Number(inputId.value);
        let name = inputName.value;
        let quantity = inputQuantity.value;
        let price = inputPrice.value;
    
    
        if (id == '' || id < 1 || id > 99999999 || name == '' || quantity == '' || price == '' || id == undefined || name == undefined || quantity == undefined || price == undefined) {    
            product = false;
        } else {
            product = new Product(id, name, quantity, price);
        }

        //Function Workflow

        if (!product) {
            Swal.fire('ESPERA', 'Hay campos vacios o con datos no correctos.', 'warning');
            console.log('Campos Vacios');
            return;
        }

        if (max >= 20) {
            Swal.fire('ESPERA', 'Se alcanzó el máximo de productos admitidos.', 'info');
            console.log(this._list.getProducts());
            return;
        }

        let addProduct = this._list.agregar(product);
        
        if(addProduct === null) {
            Swal.fire('ERROR', 'Este ID de producto ya esta registrado.', 'error');
            console.log(this._list.getProducts());
            inputId.value = ''
            return;
        }

        // this._htmlDocument.deleteProductList();

        max++;
        console.log(`Productos Registrados: ${max}`);
        
        Swal.fire('CORRECTO', 'El producto se ha añadido.', 'success');
        console.log(this._list.getProducts());
        inputId.value = ''
        inputName.value = ''        
        inputQuantity.value = ''
        inputPrice.value = ''
        // this._htmlDocument.updateHtmlProducts(this._list.getProducts());
        return;

    }


    searchForm = () => {

        let inputSearchId = document.querySelector('#idSearch');

        const search = this._list.buscar(Math.floor(Math.abs(Number(inputSearchId.value))));
        console.log(search)

        if (search != null) {
            Swal.fire(`Producto: ${search.getName()}`, `ID: ${search.getId()}, Peso: ${search.getQuantity()} kg, Precio: $${search.getPrice()}/kg Total: $${search.getTotal()}`, 'success');
            this._htmlDocument.updateSearchResults(inputSearchId.value, search);
        } else {
            this._htmlDocument.updateSearchResults(inputSearchId.value, false);
            if (inputSearchId.value <= 0 || inputSearchId.value == 0) {
                console.log(search);
                Swal.fire('ALTO', 'No puedes buscar IDs menores a 1 o nulos.', 'warning'); 
            } else {
                Swal.fire('PRODUCTO INVÁLIDO', 'Prueba buscando con otro ID/CODIGO.', 'error');
            }
        }

    }

    deleteForm = () => {
        
        let inputDeleteId = document.querySelector('#idDelete');

        const search = this._list.buscar(Math.floor(Math.abs(Number(inputDeleteId.value))));

        if (search != null) {
            Swal.fire({
                title: `¿Quiéres borrar ${search.getName()}?`,
                text: `ID: ${search.getId()}, Peso: ${search.getQuantity()} kg, Precio: $${search.getPrice()}/kg`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'BORRAR'
              }).then((result) => {
                if (result.isConfirmed) {
                    
                    this._list.eliminar(Number(inputDeleteId.value));
                    console.log(this._list._products)

                    Swal.fire(
                        '¡Borrado!',
                        'Tu producto ha sido borrado.',
                        'success'
                    )
                    max--;
                    console.log(`Productos Registrados: ${max}`);
                }
                console.log(this._list.getProducts());
                this._htmlDocument.deleteProductList();
                // this._htmlDocument.updateHtmlProducts(this._list.getProducts());
              })
        } else {
            if (inputDeleteId.value <= 0 || inputDeleteId.value == 0) {
                Swal.fire('ALTO', 'No puedes borrar IDs menores a 1 o nulos.', 'warning'); 
            } else {
                Swal.fire('PRODUCTO INVÁLIDO', 'Prueba buscando con otro ID/CODIGO.', 'warning');   
            }
        }

    }
    
}

new App()