function changeMode () {
    changeClasses();
    changeText();
    // console.log("Cliquei!")
    // elementos.classList.toggle("dark-mode");
    // botao.innerHTML = "Light Mode";
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

// const elementos = document.querySelectorAll('h1 button footer body');

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


// console.log(body); // para descobrir qual o index devo chamar. E é o zero.

botao.addEventListener('click', changeMode);

