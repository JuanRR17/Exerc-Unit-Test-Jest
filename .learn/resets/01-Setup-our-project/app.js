// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// obtain the rate between dollar and yen
const dollarToYen = (oneEuroIs.JPY/oneEuroIs.USD).toFixed(1);
// obtain the rate between yen and pound
const yenToPound = (oneEuroIs.GBP/oneEuroIs.JPY).toFixed(5);
console.log(yenToPound*160);

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * dollarToYen;
    //return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    //convert the given valueInYen to pounds
    let valueInPounds = valueInYen * yenToPound;
    //return the pound value
    return valueInPounds;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, oneEuroIs, fromDollarToYen, fromYenToPound };