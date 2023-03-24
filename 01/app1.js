
// alert('hi');

const calculator = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
    times(a, b) {
        return a * b;
    },
    
}

const resultPlus = calculator.plus(2,3);
console.log('resultPlus:',resultPlus) //5
const resultMinus = calculator.minus(resultPlus, 10);
// console.log('resultMinus: ',resultMinus); //-5
const resultTimes = calculator.times(10, resultMinus);
console.log('resultTimes: ', resultTimes); //-50


// calculator.plus(1,2);
// calculator.minus(1,2);

//--------------------------------------

const age = 26;

function calcAgeToKR(ageOfForeign) {
    return ageOfForeign + 2;
    // "hello" 
}

const KrAge = calcAgeToKR(age);

console.log(KrAge);