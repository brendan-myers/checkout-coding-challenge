import Checkout from './checkout';
import * as Item from './item';
import ruleset from './ruleset';

const checkout = new Checkout(ruleset);

// SKUs Scanned: atv, atv, atv, vga Total expected: $249.00
// checkout.scan(Item.atv);
// checkout.scan(Item.atv);
// checkout.scan(Item.atv);
// checkout.scan(Item.vga);


//SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95
// checkout.scan(Item.atv);
// checkout.scan(Item.ipd);
// checkout.scan(Item.ipd);
// checkout.scan(Item.atv);
// checkout.scan(Item.ipd);
// checkout.scan(Item.ipd);
// checkout.scan(Item.ipd);


//SKUs Scanned: mbp, vga, ipd Total expected: $1949.98
checkout.scan(Item.mbp);
checkout.scan(Item.vga);
checkout.scan(Item.ipd);


console.log(checkout.total());