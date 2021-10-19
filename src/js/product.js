export default class Product {

    constructor(id, name, quantity, price) {
        this.id = Math.floor(Math.abs(Number(id)));
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity;
    }

    getPrice() {
        return this.price;
    }

    getTotal() {
        return this.getPrice() * this.getQuantity();
    }
}