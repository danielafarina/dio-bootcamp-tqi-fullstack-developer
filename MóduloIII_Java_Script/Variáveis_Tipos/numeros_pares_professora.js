function substituiPares(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            console.log("Você já é zero!!");            
        } else if (arr[i] % 2 === 0) {
            array[i] = 0;
        } 
    }
    return arr;
}

let array = [20,0,7,8];
substituiPares(array);
console.log(array);