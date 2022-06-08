function funcao (a, b) {
    var frase1 = "";
    var frase2 = "";
    var frase3 = "";
    if (a == b) {
        frase1 = `Os números ${a} e ${b} são iguais.`;
    } else {
        frase1 = `Os números ${a} e ${b} não são iguais.`;
    }
    const soma = a + b;
    if (soma < 10) {
        frase2 = ` Sua soma é ${a}, que é menor que 10 e`;        
    }
    else {
        frase2 = ` Sua soma é ${a}, que é maior que 10 e`;
    }

    if (soma > 20) {
        frase3 = " maior que 20.";        
    }
    else {
        frase3 = " menor que 20.";
    }

    console.log(frase1 + frase2 + frase3);
}

funcao(20,3);

