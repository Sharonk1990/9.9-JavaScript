const adultCheck = function (age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
};

// arrow function:
/* const adultCheck = (age) => 
    age >= 18; */


const greeting = function (age) {
    const sayHi = adultCheck(age);
    if (sayHi == true) {
        return "Hello There"
    } else {
        return "Hey Kiddo"
    }
};

console.log(greeting(16));


const vatAmount = function (basePrice, vatPercentage) {
    vat = basePrice * vatPercentage;
    console.log(vat);
    return vat;
};

const totalPrice = function (basePrice, vatPercentage) {
    vatPrice = vatAmount(basePrice, vatPercentage);
    totalAmount = vatPrice + basePrice;
    console.log(vatPrice, basePrice)
    return totalAmount;
};

console.log(totalPrice(100, 0.21));


