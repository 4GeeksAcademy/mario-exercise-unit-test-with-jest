// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (a) => {
    return a * 1.2
}

const fromDollarToYen = (a) => {
    return a * 153.48
}

const fromYenToPound = (a) => {
    return a / 102.32
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };