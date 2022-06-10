function validaArray(arr, n) {
    try { // aqui são executadas instruções e caso ocorra algum erro durante o processo...

        if(!arr && !n) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo objeto");

        if(typeof n !== 'number') throw new TypeError("Number precisa ser do tipo number");

        if(n !== arr.length) throw new RangeError("Number precisa ser do tamanho da array");

        return arr;

    }
    catch(e) { // aqui será tratado o erro
        
        if(e instanceof ReferenceError) {
            console.log("este erro é um ReferenceError");
            console.log(e.message);
            // console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("este erro é um TypeError");
            console.log(e.message);
            // console.log(e.stack);
        } else if(e instanceof RangeError) {
            console.log("este erro é um RangeError");
            console.log(e.message);
            // console.log(e.stack);
        } else {
            console.log("Tipo de erro não esperado: " + e)
        }
    }
}

// console.log(validaArray([],'a'));

// console.log(validaArray());

console.log(validaArray([1,3,5], 2));