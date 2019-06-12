import * as Item from './item';

export const appleTVs = {
    description: "3 for 2 deal on Apple TVs",
    fn: items => {
        const discount = -Item.atv.price;
        const res = items.filter(item => item.SKU === Item.atv.SKU);

        return Math.floor(res.length/3) * discount;
    }
};

export const ipadBulkDiscount = {
    description: "Super iPad bulk discount",
    fn: items => {
        const discount = -50.00;
        const res = items.filter(item => item.SKU === Item.ipd.SKU);

        return res.length >= 3 ? res.length * discount : 0;
    }    
};

export const freeVGAadapter = {
    description: "Free VGA adapter with every MacBook Pro",
    fn: items => {
        const discount = -Item.vga.price;
        let vgaCount = 0;
        let mbpCount = 0;

        items.forEach(item => {
            if (item.SKU === Item.vga.SKU) {
                vgaCount++;
            } else if (item.SKU === Item.mbp.SKU) {
                mbpCount++;
            }
        });

        return Math.min(vgaCount, mbpCount) * discount;
    }
};

export default [
    appleTVs,
    ipadBulkDiscount,
    freeVGAadapter
];