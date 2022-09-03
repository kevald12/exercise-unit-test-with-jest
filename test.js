// lets try the function 

const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js');

/*test('adds 14 + 9 to equal 23', () =>{

    let total = sum (14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})*/
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 127.9 yenes", function (){
    const {fromDollarToYen} = require ('./app.js')

    const yenes = fromDollarToYen(4.5)

    const expected = 4 * 127.9;

    expect(fromDollarToYen(4)).toBe(511.6);
})

test("One Yen should be 0.8 pounds", function (){
    const {fromYenToPound} = require ('./app.js')

    const pounds = fromYenToPound(4.5)

    const expected = 5 * 0.8;

    expect(fromYenToPound(5)).toBe(4);
})
