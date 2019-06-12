import * as Rules from "../src/ruleset";
import * as Items from "../src/item";
import { expect } from "chai";

describe("ruleset", () => {
    describe("3 for 2 deal on Apple TVs", () => {
        it("should not apply if basket empty", () => {
            const res = Rules.appleTVs.fn([]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket doesn't contain any Apple TVs", () => {
            const res = Rules.appleTVs.fn([Items.ipd, Items.mbp, Items.vga]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket contains less than 3 Apple TVs", () => {
            const res = Rules.appleTVs.fn([Items.atv, Items.atv]);
            expect(res).to.equal(0);
        });

        it("should apply once if basket contains 3 Apple TVs", () => {
            const res = Rules.appleTVs.fn([Items.atv, Items.atv, Items.atv]);
            expect(res).to.equal(-Items.atv.price);
        });

        it("should apply only for multiples of 3 Apple TVs", () => {
            const basket = [Items.atv, Items.atv, Items.atv];
            expect(Rules.appleTVs.fn(basket)).to.equal(-Items.atv.price);

            basket.push(Items.atv);
            expect(Rules.appleTVs.fn(basket)).to.equal(-Items.atv.price);

            basket.push(Items.atv);
            expect(Rules.appleTVs.fn(basket)).to.equal(-Items.atv.price);

            basket.push(Items.atv);
            expect(Rules.appleTVs.fn(basket)).to.equal(-Items.atv.price * 2);
        });
    });

    describe("Super iPad bulk discount", () => {
        it("should not apply if basket empty", () => {
            const res = Rules.ipadBulkDiscount.fn([]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket doesn't contain any iPads", () => {
            const res = Rules.ipadBulkDiscount.fn([Items.atv, Items.mbp, Items.vga]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket contains less than 3 iPads", () => {
            const res = Rules.ipadBulkDiscount.fn([Items.ipd, Items.ipd]);
            expect(res).to.equal(0);
        });

        it("should apply to each iPad if basket contains 3 iPads", () => {
            const res = Rules.ipadBulkDiscount.fn([Items.ipd, Items.ipd, Items.ipd]);
            expect(res).to.equal(-150);
        });

        it("should apply to each iPad if basket contains more than 3 iPads", () => {
            const res = Rules.ipadBulkDiscount.fn([Items.ipd, Items.ipd, Items.ipd, Items.ipd, Items.ipd]);
            expect(res).to.equal(-250);
        });

        it("should apply only to iPads if basket contains more than 3 iPads", () => {
            const basket = [Items.ipd, Items.ipd, Items.ipd];
            basket.push(Items.atv);
            basket.push(Items.atv);
            basket.push(Items.atv);
            basket.push(Items.mbp);
            basket.push(Items.mbp);
            basket.push(Items.vga);
            basket.push(Items.vga);

            expect(Rules.ipadBulkDiscount.fn(basket)).to.equal(-150);
        });
    });

    describe("Free VGA adapter with every MacBook Pro", () => {
        it("should not apply if basket empty", () => {
            const res = Rules.freeVGAadapter.fn([]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket doesn't contain any MacBook Pros", () => {
            const res = Rules.freeVGAadapter.fn([Items.atv, Items.ipd, Items.vga]);
            expect(res).to.equal(0);
        });

        it("should not apply if basket doesn't contain any VGA adapters", () => {
            const res = Rules.freeVGAadapter.fn([Items.atv, Items.ipd, Items.mbp]);
            expect(res).to.equal(0);
        });

        it("should apply once if basket contains 1 MacBookPro and 1 VGA adapter", () => {
            const res = Rules.freeVGAadapter.fn([Items.mbp, Items.vga]);
            expect(res).to.equal(-Items.vga.price);
        });

        it("should apply only for each pair of MacBookPro and VGA adapter", () => {
            const basket = [];
            basket.push(Items.mbp);
            basket.push(Items.mbp);
            basket.push(Items.vga);
            basket.push(Items.vga);
            basket.push(Items.vga);

            expect(Rules.freeVGAadapter.fn(basket)).to.equal(-Items.vga.price * 2);
        });
    });
});