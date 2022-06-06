// // var y = 0;
// var x = 1;

// /* var y = 0;
// var x = 1; */

// var y = 0;

// const k = 2;

// var diff = x - y + k;

// function soma(a, b){
//     console.log(a+b);
//     return a + blur;
// }

// soma(3,5);

// console.log("hello world")

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("os números pares são:", evenNums)
}

let array = [1,2,3,4,5,6,7];
returnEvenValues(array);


