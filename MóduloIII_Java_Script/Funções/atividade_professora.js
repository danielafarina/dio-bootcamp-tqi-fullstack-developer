// ATIVIDADE 1
// const ALUNOS = [
//     { nome: "Dani", nota: 10, turma: "2C" },
//     { nome: "Márcio", nota: 7, turma: "2A" },
//     { nome: "Tiago", nota: 5, turma: "2B" },
//     { nome: "Hudson", nota: 2, turma: "2D"}
// ];

// function alunosAprovados(arr, media) {
//     let aprovados = [];
//     for(let i = 0; i < arr.length; i++) {

//         const {nota, nome} = arr[i]; // object destructuring: pego só as propriedades que eu quiser.

//         if(nota >= media) {
//             aprovados.push(nome);
//         }
//     }
//     return aprovados;
// }

// console.log(alunosAprovados(ALUNOS, 6));

// ATIVIDADE 2

const PESSOA1 = {
    nome: "Daniela",
    idade: 36,
}

const PESSOA2 = {
    nome: "Márcio",
    idade: 25,
}

const ANIMAL1 = {
    nome: "Luna",
    idade: 10
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

// console.log(calculaIdade.call(ANIMAL1, 5));

console.log(calculaIdade.apply(PESSOA2, [5])); // com o apply tem que usar colchetes.
