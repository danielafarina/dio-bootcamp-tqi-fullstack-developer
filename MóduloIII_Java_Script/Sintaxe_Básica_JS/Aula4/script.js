// var jogador1 = 2;
// var jogador2 = 1;
// var placar; 

// // aninhando if's
// // if ternário
// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos')
// if (jogador1 > 0 && jogador2 == 0) {
//     console.log('o jogador 1 marcou ponto');
//     placar = jogador1 > jogador2;
// }
// // usando o else if
// else if (jogador2 > 0 && jogador1 == 0) {
//     console.log('o jogador 2 marcou ponto');
//     placar = jogador2 > jogador1;
// } 
// // usando o else
// else {
//     console.log('ninguem marcou ponto');
// } 

// // usando switch case
// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou');
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('jogador 2 ganhou');
//         break;
//     default:
//         console.log('ninguem marcou ponto')
// } 

// let array = ['v1', 'v2', 'v3', 'v4', 'v5'];

// let object = { prop1: 'valor1', prop2: 'valor2', prop3: 'valor3'};

// // for (let indice = 0; indice < array.length; indice++) {
// //     console.log(indice) // imprime números
// // }

// for (i in array) {
//     console.log(i); // imprime os índices
// }

// for (i in object) {
//     console.log(i); // imprime prop1, prop2 e prop3
// }

// for (i of array) {
//     console.log(i); // imprime os valores
// }

// for (i of object.prop1) {
//     console.log(i);  // vai imprimir cada letra de valor1 em uma linha. Por isso não dá pra utilizar o for of com objetos.
// }

// while

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);