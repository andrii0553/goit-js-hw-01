function makeTransaction(quantity, pricePerDroidparams) {
    return `"You ordered ${quantity} droids worth ${quantity * pricePerDroidparams} credits!"`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

