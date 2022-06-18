import React from 'react';

function Button(props) { // a criação de componentes deve ser o mais pura possível, sem estado, sem vários elementos acompanhando o mesmo, pois eles irão ser reutilizados em outros momentos.
    const { name, onClick } = props // o mesmo que fazer const name = props.name, pois estou fazendo a desestruturação do objeto (para relembrar o que é isso, vá ao final deste código)

    return (
        <button onClick={onClick}>{name}</button>
    )

}

export default Button


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