import { expect, should} from "chai"
import Item from "../src/item"

describe("Item class", () => {
    const SKU = "TEST";
    const NAME = "Test item";
    const PRICE = 150.00;

    describe("valid instantiation", () => {
        let item = new Item(SKU, NAME, PRICE);

        it("should be instantiatable", () => {
            expect(item).to.be.an.instanceof(Item);
        });

        it("should return the correct properties", () => {
            expect(item.SKU).to.equal(SKU);
            expect(item.name).to.equal(NAME);
            expect(item.price).to.equal(PRICE);
        });
    });

    describe("invalid instantiation", () => {
        it("should error when missing SKU", () => {
            expect(() => new Item(null, NAME, PRICE)).to.throw(Error);
        });

        it("should error when missing name", () => {
            expect(() => new Item(SKU, null, PRICE)).to.throw(Error);
        });

        it("should error when missing price", () => {
            expect(() => new Item(SKU, NAME, null)).to.throw(Error);
        });

        it("should error when price is not a number", () => {
            expect(() => new Item(SKU, NAME, "not a number")).to.throw(Error);
        });
    });

    describe("getters and setters", () => {
        it("should set and get all properties correctly", () => {
            let item = new Item(SKU, NAME, PRICE);

            const newSku = "NEW";
            const newName = "New Name";
            const newPrice = 42.42;

            item.SKU = newSku;
            item.name = newName;
            item.price = newPrice;

            expect(item.SKU).to.equal(newSku);
            expect(item.name).to.equal(newName);
            expect(item.price).to.equal(newPrice);
        });
    });
});