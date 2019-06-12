# Shopping Cart

## Setup

```
npm install
```


## Run / Build / Test

```
npm start
npm run build
npm test
```

- An example can be found in `src/index.js`.
- Valid items can be found in `src/item.js`
- An example set ouf discount rules can be found in `src/ruleset.js`


## Thoughts

- Not possible to remove items from cart/checkout.
- Not checking to see if multiple discounts are applied for the same items (ie, if two rules were to apply).
- I'm sure there's a more elegant way to apply discounting rules that doesn't involve running the whole list of items.