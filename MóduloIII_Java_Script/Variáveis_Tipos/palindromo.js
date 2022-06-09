function palindromo(string) {
    stringLowerCase = string.toLowerCase();
    var array = stringLowerCase.split("");
    var reverse = array.reverse();
    var newString = reverse.join("");
    var lowerCase = newString.toLowerCase();
    if (stringLowerCase == lowerCase) {
        console.log("É um palíndromo");
    }
}

palindromo("oVo");