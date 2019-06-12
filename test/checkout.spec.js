import { expect, should} from "chai";
import Checkout from "../src/checkout";
import * as Item from "../src/item";
import ruleset from "../src/ruleset";

describe("Checkout class", () => {
    describe("valid instantiation", () => {
        let checkout = new Checkout([]);

        it("should be instantiatable", () => {
            expect(checkout).to.be.an.instanceof(Checkout);
        });
    });

    describe("when there are no items", () => {
        let checkout = new Checkout([]);

        it("should have a total of 0 when there is nothing present", () => {
            expect(checkout.total()).to.equal(0);
        });
    });

    describe("when there are items", () => {
        it("should have a total of `Item.price` when an `Item` is added", () => {
            const checkout = new Checkout([]);
            checkout.scan(Item.atv);
            expect(checkout.total()).to.equal(Item.atv.price);
        });

        it("should have a total of 2 * `Item.atv.price` when 2 `Item` are added", () => {
            const checkout = new Checkout([]);
            checkout.scan(Item.atv);
            checkout.scan(Item.atv);
            expect(checkout.total()).to.equal(2 * Item.atv.price);
        });

        it("should have a total equalling the sum of prices of items added", () => {
            const checkout = new Checkout([]);
            checkout.scan(Item.atv);
            checkout.scan(Item.ipd);
            checkout.scan(Item.mbp);
            checkout.scan(Item.vga);
            expect(checkout.total()).to.equal(Item.atv.price + Item.ipd.price + Item.mbp.price + Item.vga.price);
        });
    });

    describe("apply rules", () => {
        it("should apply the bulk discount rule", () => {
            const checkout = new Checkout(ruleset);

            const total = Item.atv.price * 2;

            checkout.scan(Item.atv);
            checkout.scan(Item.atv);
            checkout.scan(Item.atv);

            expect(checkout.total()).to.equal(total);
        });
    });
});