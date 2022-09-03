// first function

const sum = (a,b) =>{
    return a + b 
}

console.log(sum(8,5))

// point 12

/*const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}*/



//excercise 

let oneEuroIs = {
    "JPY" : 127.9,
    "USD" : 1.2,
    "GBP" : 0.8,
}


const fromDollarToYen = (USD, JPY) =>{
     return (USD * 127.9)
}
const fromEuroToDollar = (EUR, USD) =>{
    return (EUR * oneEuroIs.USD )
}
const fromYenToPound = (JPY,GBP) => {
    return (JPY * 0.8)
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound }
