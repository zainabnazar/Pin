const pin = require('./pin');

function numberToArray(number) {
    let array = number.toString().split("");
    return array.map(x => parseInt(x));
};

let array=[];
let newArray = [];

function pinOrder(num){
    const pins = pin(num)
    console.log("Pins out of order:")
    console.log(pin(num)); 
    for (let i=0; i<pins.length; i++){
       array.push(numberToArray(pins[i])); 
    }

    for (let i=0; i<array.length; i++){
    newArray[i]= array[i].map(function(val, index){
        if (val == 5) {index=10}
        if (val == 1) {index=9}
        if (val == 2) {index=8}
        if (val == 8) {index=7}
        if (val == 7) {index=6}
        if (val == 4) {index=5}
        if (val == 0) {index=4}
        if (val == 3) {index=3}
        if (val == 6) {index=2}
        if (val == 9) {index=1}
        return {index, val};
    })
    }
let values = new Array(array.length).fill(0);
    for (let i=0; i<newArray.length; i++){
        newArray[i].forEach(object => {
            values[i] = values[i]+object.index;
          });
        }

let result =  Object.assign.apply({}, pins.map( (v, i) => ( {[v]: values[i]} ) ) );

// Sort object depend on values
resultSorted = (Object.keys(result).sort(function(a,b){return result[a]-result[b]})).reverse();
console.log("Pins in order:")
return (resultSorted);
};

// Enter the approximate pin to calculate the possible pins in priorty order
console.log(pinOrder(97516)); 
module.exports = pinOrder;