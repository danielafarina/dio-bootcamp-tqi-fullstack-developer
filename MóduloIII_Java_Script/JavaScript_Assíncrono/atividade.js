const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
// const catImg = document.getElementById('cat');

// const getCats = async () => { // função de carregar os gatinhos
//     try {
//         const data = await fetch(BASE_URL);
//         const json = await data.json(); // pegar a string e converter em json
//         return json.webpurl; // digite e BASE_URL num navegador e entenderás qual a propriedade estou buscando desse objeto.
//     }
//     catch(e) {
//         console.log(e.message);
//     }
// };

const getCats = async () => { 
    const data = await fetch(BASE_URL);
        .then((res)=> res.json())
        .catch((e)=> console.log(e));
    
    return json.webpurl; 
};
        
const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats(); 
};

catBtn.addEventListener('click', loadImg); // o evento é o clique no botão e ele vai chamar a função loadImg sempre que alguém clicar.

loadImg();

