// This

// const PESSOA = {
//     firstName: "André",
//     lastName: "Soares",
//     id: 1,
//     fullName: function() {
//         return this.firstName + " " + this.lastName; // o this é PESSOA nesse caso
//     },
//     getId: function() {
//         return this.id;
//     }
// };

// console.log(PESSOA.fullName());

// console.log(PESSOA.getId());


// Call: vai dizer a quem o this se refere

// const PESSOA = {
//     nome: "Miguel",
// };

// const ANIMAL = {
//     nome: "Murphy",
// };

// function getSomething() {
//     console.log(this.nome);
// }

// // getSomething.call(PESSOA);

// getSomething.call(ANIMAL);


// const MY_OBJ = {
//     num1: 2,
//     num2: 4,
// };

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(MY_OBJ, 1, 9);


// Apply: funcionamento parecido com o CALL

// const PESSOA = {
//     nome: "Miguel",
// };

// const ANIMAL = {
//     nome: "Godi",
// };

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.apply(ANIMAL);


// Diferença do Apply com o Call: é possível passar parâmetros dentro de um array

// const MY_OBJ = {
//     num1: 2,
//     num2: 4,
// };

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.apply(MY_OBJ, [1, 4]);

// Bind: clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parâmetro

const RETORNA_NOMES = function () {
    return this.nome;
};

let bruno = RETORNA_NOMES.bind( { nome: "Bruno" } );

console.log(bruno());