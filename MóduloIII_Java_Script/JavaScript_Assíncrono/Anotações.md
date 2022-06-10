# Assíncrono

Que não ocorre ou não se efetiva ao mesmo tempo. Ex: aprendizado físico X online.

O JS roda de maneira síncrona.

## Promise

Inicialmente, seu valor é desconhecido. Com o tempo, ela pode ser resolvida ou rejeitada.

1 - Pending
2 - Fulfilled
3 - Rejected

const MY_PROMISSE = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

await MY_PROMISE
            then((result) => result + 'passando pelo then')
            then((result) => result + 'e agora acabou!')
            catch((err) => console.log(err.message));


## Await

Serve pra dizer que o código só vai continuar quando receber a Promise.


# API

Application Programming Interface: É uma forma de intermediar os resultados do back-end com o que é apresentado no front-end. Você consegue acessá-la por meio de URLs. São os URLs que vão trazer dados pra vocês.

.json

Formato de objeto


# Fetch

Retorna uma Promise.