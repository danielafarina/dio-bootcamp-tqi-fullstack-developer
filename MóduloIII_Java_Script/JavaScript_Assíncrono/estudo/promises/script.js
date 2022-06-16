// PROCESSAMENTO DE FORMA SÍNCRONA
// function sumNumbers() {
//         let result = 1 + 1

//          if (result == 2) {
//                 successCallback()
//         } else {
//                 errorCallback()
//         }
// }

// function successCallback() {
//         console.log("Yeah! Number 2!")
// }

// function errorCallback() {
//         console.log("Oops! Something wrong.")
// }

// sumNumbers();


// PROCESSAMENTO DE FORMA ASSÍNCRONA (PROMISES)

// let p = new Promise( (resolve, reject) => { // quando eu tenho um resultado que falha, eu passo pro callback reject; quando um tem sucesso, passo pro callback resolve
//         let a = 1 + 2
//         if (a == 2) {
//                 resolve('Success')
//         } else {
//                 reject('Failed') 
//         }
// })

// // Agora vamos chamar as promises:
// p.then((message) => {
//         console.log('This is in the then ' + message)
// }).catch((err) => {
//         console.log('This is the catch ' + err)
// })


// AGORA UM EXEMPLO MAIS REBUSCADO

// const betterDeveloper = 'tiago'

// function whoIsBetterCallback(callback, errorCallback) {
//         if (betterDeveloper != 'daniela' && betterDeveloper != 'marcio') {
//                 errorCallback({
//                         name: 'This is wrong. ',
//                         message: betterDeveloper + '? Really?'
//                 })
//         } else {
//                 callback({
//                         name: betterDeveloper,
//                         message: 'CDFs are the best!'
//                 })
//         }
// }

// whoIsBetterCallback((result) => {
//         console.log(result.name + '? Yeah! ' + result.message )
// }, (error) => {
//         console.log(error.name + ' ' + error.message)
// })

// AGORA VAMOS DE FATO COLOCAR AS PROMISES:

// const betterDeveloper = 'marcio'

// function whoIsBetterCallback() {

//         return new Promise((resolve, reject) => { // adiciono aqui o new Promise
//                 if (betterDeveloper != 'daniela' && betterDeveloper != 'marcio') {
//                         reject({ // ao invés de chamar errorCallback, vou chamar o reject
//                                 name: 'This is wrong. ',
//                                 message: betterDeveloper + '? Really?'
//                         })
//                 } else {
//                         resolve({
//                                 name: betterDeveloper,
//                                 message: 'CDFs are the best!'
//                         })
//                 }
//         })       
// }

// whoIsBetterCallback() // na hora de chamar a promise, preciso usar o .then()
//         .then((result) => {
//         console.log(result.name + '? Yeah! ' + result.message )
// }).catch((error) => {
//         console.log(error.name + ' ' + error.message)
// })


// AGORA OUTRO EXEMPLO PRA VER AS PROMISES FUNCIONANDO

const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users' // uma url que retorna um json qualquer, só pra gnt poder testar

fetch(url) // é um objeto que funciona como uma promise, de maneira assíncrona
        .then((resp) => resp.json()) // tenta buscar o json
        .then(function (data) { // funciona depois que o json retorna
                console.log(data)

                return data.map(function (user) { // varrer os resultados através do map
                        let li = document.createElement('li');
                        li.innerHTML = `${user.name} (${user.username})`
                        ul.appendChild(li)
                })
        })
        .catch((error) => {
                console.log('Oops!' + error)
        })
