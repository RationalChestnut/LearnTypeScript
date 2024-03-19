"use strict";
const score = [];
const names = [];
// Does not work for string
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
// We can define our own types and pass into it
function identityFour(val) {
    return val;
}
identityFour({
    brand: "Coca-Cola",
    type: 1,
});
function getSearchProducts(products) {
    return products[0];
}
// Arrow function
const getMoreSearchProducts = (products) => {
    return products[0];
};
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
