let array = ['string', 1, true, ['array1'], ['array2']];
// console.log(array);

// array.forEach(function(item, index) {console.log(item, index)});

// array.push('novo item'); // coloca no final
// console.log(array);

// array.pop(); // tira do final
// console.log(array);

// array.shift(); // tira do início
// console.log(array);

// array.unshift('novo item no início');
// console.log(array);

// console.log(array.indexOf(true));

// array.splice(0,3); // apaga o 0, 1 e 2
// console.log(array);

// let novoArray = array.slice(0,3); // pega o 0, 1 e 2
// console.log(novoArray);

let object = { string: 'string', boolean: true, number: 1, array: ["array"], objectInterno: {objectInterno: 'objeto interno', number: 2} };

// console.log(object.objectInterno);

// var string = object.string; // desestruturação

// console.log(string);

let { string, number } = object;

console.log(string, number);