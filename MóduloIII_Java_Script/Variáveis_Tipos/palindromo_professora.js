// solução 1

// function verificaPalindromo(string) {
//     if (!string) return "string inexistente"; // verificando se não é vazia, nula ou undefined.

//     return string.split("").reverse().join("") === string;
// }

// console.log(verificaPalindromo(""));

// solução 2

function verificaPalindromo(string) {
    if (!string) return "string inexistente"; // verificando se não é vazia, nula ou undefined.

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("abba"));