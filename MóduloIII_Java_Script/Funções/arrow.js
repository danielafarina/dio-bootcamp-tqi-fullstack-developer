// Arrow function
const HELLO_WORLD1 = function () {
    return "Hello World1";
}

const HELLO_WORLD2 = () => {
    return "Hello World2";
}

const HELLO_WORLD3 = () => "Hello World3"; // se tiver uma linha só, não precisa do return.

console.log(HELLO_WORLD1());
console.log(HELLO_WORLD2());
console.log(HELLO_WORLD3());

// const SOMA = (a, b) => a + b;

// console.log(SOMA(4, 6));

// const NUMERO = a => a; // se tiver apenas um parâmetro, pode dispensar os parênteses.

// console.log(NUMERO(8));

// Arrow Function não faz hoisting, portanto, declare ela primeiro, depois a chame. Já a function normal faz hoisting. Observe:

// console.log(soma(2, 4));

// function soma(a, b) {
//     return a + b;
// }


// Restrições
// "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
// não existe o objeto "arguments";
// o construtor (new MeuObjeto()) também não pode ser utilizado.

