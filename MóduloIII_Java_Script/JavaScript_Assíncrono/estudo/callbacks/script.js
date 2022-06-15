// const $button = document.querySelector("button");

// $button.addEventListener("click", () => { // é uma função de callback, que não vai acontecer na hora, apenas em um determinado momento: quando o botão for clicado. Outro exemplo: quando vc tá consumindo uma API, ex: pegando dados do YT. Vc pede os dados e eles não vêm na hora, eles vêm em algum momento.
//     console.log("Button foi clicado");
// })


// ***Outra forma de criar um botão, fora do html, apenas com js:***

// const $body = document.querySelector("body");
// const $button = document.createElement("button");
// $button.textContent = "Login";
// $body.insertAdjacentElement("beforeend", $button);


// ***Criando vários botões:***

// function newButton(text){
//     const $body = document.querySelector("body");
//     const $button = document.createElement("button");
//     $button.textContent = text;
//     $body.insertAdjacentElement("beforeend", $button);
//     return $button; // aqui eu passo o botão para fora da função, porque ele estava somente dentro.
// }

// const signout = newButton("Signout");

// console.log("signout", signout); // <button>Signout</button>

// signout.style.cssText = `
//     font-size: 40px;
//     background-color: pink;
// `;


// ***Agora usando callback:***

function newButton(text, callback){
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement("beforeend", $button); // insere o botão na tela.
    return $button; 
}

newButton("Signout", (button) => {
    button.style.cssText = `
        font-size: 40px;
        color: pink;
    `;
    button.addEventListener('click', () => {
        console.log("Oi, você clicou em Signout");
    })
});

newButton("Signup", (button) => {
    button.style.cssText = `
        font-size: 60px;
    `;
});

