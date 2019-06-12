export default class Item {
    constructor(sku, name, price) {
        if (!sku || !name || !price) {
            throw Error("Missing arguments");
        }

        if (typeof price !== "number") {
            throw Error("price not a numnber");
        }

        this._sku = sku;
        this._name = name;
        this._price = price;
    }

    get SKU() {
        return this._sku;
    }

    set SKU(sku) {
        this._sku = sku;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }
};

// should put this in a separate file
export const ipd = new Item("ipd", "Super iPad", 549.99);
export const mbp = new Item("mbp", "MacBook Pro", 1399.99);
export const atv = new Item("atv", "Apple TV", 109.50);
export const vga = new Item("vga", "VGA adapter", 30.00);