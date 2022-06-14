async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Magic !!!");
        }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

