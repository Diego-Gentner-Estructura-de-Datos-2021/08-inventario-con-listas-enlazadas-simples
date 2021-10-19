export default class UpdateHTML {

    constructor(array) {
        this._lever = false;
        this._products = array;
    }

    updateSearchResults(id, search) {

        if (id == 0 || id < 1) {
            return;
        }

        let block_to_insert;
        let container_block;
        let time = new Date();
        let message;

        if (search != false) {
            message = `y fue encontrado ✔<br>▶ ${search.getName()}, ID: ${search.getId()}, Peso: ${search.getQuantity()} kg, Precio: $${search.getPrice()}/kg Total: $${search.getTotal()}`
        } else {
            message = 'y no fue encontrado ❌'
        }
        
        block_to_insert = document.createElement( 'div' );
        block_to_insert.setAttribute('class', 'searchResultsIndex');
        block_to_insert.innerHTML = `<h5 class"mb-2"> ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} a las ${this.formatDate(time.getHours())}:${this.formatDate(time.getMinutes())}:${this.formatDate(time.getSeconds())} horas <br>Se busco el ID: ${id} ${message}</h5>`;
        
        container_block = document.getElementById('historialBusqueda');
        container_block.prepend(block_to_insert);
    }

    updateHtmlProducts(products) {
        let block_to_insert;
        let container_block;
         
        products.forEach(element => {
            if (element != undefined) {
                block_to_insert = document.createElement( 'div' );
                block_to_insert.classList.add("productsIndex");
                block_to_insert.classList.add("mb-2");
                block_to_insert.innerHTML = `ID: ${element.getId()}, ${element.getName()}, Peso: ${element.getQuantity()} kg, Precio: $${element.getPrice()}/kg Total: $${element.getTotal()}`;
                 
                container_block = document.getElementById('productosAlmacenados');
                if (this._lever === false) {
                    container_block.appendChild(block_to_insert);
                } else {
                    container_block.prepend(block_to_insert);
                }
            }
        });
    }

    deleteProductList = () => {
        const elements = document.getElementsByClassName('productsIndex');
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
    }

    invertList = () => {
        this.deleteProductList();
        if (this.getLever()) {
            this.setLever(false);
        } else {
            this.setLever(true);
        }

        this.updateHtmlProducts(this._products);
        return true;
    }

    deleteSearchHistory = () => {
        Swal.fire('Historial Borrado', '', 'success');
        const elements = document.getElementsByClassName('searchResultsIndex');
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
    }


    // Extra Functions

    setLever(boolean) {
        this._lever = boolean;
    }

    getLever() {
        return this._lever;
    }

    formatDate(data) {
        if (data < 10) {
            return `0` + data;
        } else {
            return data;
        }
    }

}