import Item from "./item";

export default class Checkout {
    constructor(ruleset) {
        this.ruleset = ruleset;
        this.items = [];
    }

    scan(item) {
        this.items.push(item);
    }

    _checkRules() {
        const adjustments = [];

        this.ruleset.forEach(rule => {
            const amount = rule.fn(this.items);

            if (amount != 0) {
                // push an item, can display on receipt instead of just a total amount
                adjustments.push(new Item("DISCOUNT", rule.description, amount));
            }
        });

        return adjustments;
    }

    total() {
        const total = this.items.reduce((acc, item,) => {
            return acc + item.price;
        }, 0);

        const adjustments = this._checkRules().reduce((acc, item) => {
            return acc + item.price;
        }, 0);

        return total + adjustments;
    }
}