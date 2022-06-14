const cartesian = require('./cartestain');

function pin(num) {
    let output = [];
    let poss=[];
    digits = num.toString();
for (var i = 0; i < digits.length; i += 1) {
    output.push(+digits.charAt(i));
}
for (let i=0; i< output.length; i++){
    if (output[i]==0) {
        poss.push([0,8]);
    }
    else if (output[i]==1) {
        poss.push([1,2,4]);
    }
    else if (output[i]==2) {
        poss.push([1,2,3,5]);
    }
    else if (output[i]==3) {
        poss.push([2,3,6]);
    }
    else if (output[i]==4) {
        poss.push([1,4,5,7]);
    }
    else if (output[i]==5) {
        poss.push([2,4,5,6,8]);
    }
    else if (output[i]==6) {
        poss.push([3,5,6,9]);
    }
    else if (output[i]==7) {
        poss.push([4,7,8]);
    }
    else if (output[i]==8) {
        poss.push([0,5,7,8,9]);
    }
    else if (output[i]==9) {
        poss.push([6,8,9]);
    };
    }
    return(cartesian(poss))
}

module.exports = pin;