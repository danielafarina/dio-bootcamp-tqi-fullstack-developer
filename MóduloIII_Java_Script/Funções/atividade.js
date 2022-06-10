// ATIVIDADE 1
// const ALUNOS = [
//     { nome: "Dani", nota: 10 },
//     { nome: "Márcio", nota: 7 },
//     { nome: "Tiago", nota: 5 },
//     { nome: "Hudson", nota: 2}
// ];

// const MEDIA = 6;

// const NEW_ALUNOS = [];

// for (let i = 0; i < ALUNOS.length; i++) {
//     if (ALUNOS[i].nota >= MEDIA) {
//         NEW_ALUNOS.push(ALUNOS[i]);
//     }
// }

// console.log(NEW_ALUNOS);

// ATIVIDADE 2
const PESSOA1 = {
    nome: "Daniela",
    idade: 36,
}

const PESSOA2 = {
    nome: "Márcio",
    idade: 25,
}

function calculaIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(PESSOA1, 5));