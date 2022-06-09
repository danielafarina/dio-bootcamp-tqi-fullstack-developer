function substituiNumerosPares(array) {  
    if (array == "") {
        console.log( "-1");
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0 && array[i] != 0) {
                array[i] = 0;
            }        
        }
        console.log(array);
    }    
}

substituiNumerosPares([20,0,8,9]);