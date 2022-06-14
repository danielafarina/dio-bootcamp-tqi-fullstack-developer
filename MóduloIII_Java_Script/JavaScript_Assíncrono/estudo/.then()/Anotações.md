# Utilizando Promises com .then()

Já que estávamos falando sobre APIs REST, vamos ver um exemplo usando a Fetch API do JavaScript para buscar dados e convertê-los para o formato JSON. Esta API (que funciona nativamente nos navegadores atuais) tem alguns métodos internos e já retorna por padrão uma Promise que vai resolver a requisição, tendo ou não sucesso.

*function getUser(userId) {*
 *const userData = fetch(`https://api.com/api/user/${userId}`)*
   *.then(response => response.json())*
   *.then(data => console.log(data.name))*
*}*

*getUser(1); // "Nome Sobrenome"*


Destrinchando o código acima: a função getUser() recebe um id de usuário como parâmetro, para que seja passado para o endpoint REST fictício. O método fetch() recebe como parâmetro o endpoint e retorna uma Promise.

# E como funcionam as Promises?

Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.

Assim, podemos escrever o código do que irá acontecer em seguida, com os dados recebidos pela Promise, e o JavaScript vai aguardar a resolução da Promise sem pausar o fluxo do programa.

O resultado pode ou não estar pronto ainda, e não há forma de pegar o valor de uma Promise de modo síncrono; Só é possível requisitar à Promise que execute uma função callback quando o resultado estiver disponível - seja ele o que foi solicitado (os dados da API, por exemplo), ou uma mensagem de erro caso algo tenha dado errado com a requisição (o servidor pode estar fora do ar, por exemplo).

No exemplo acima:ao iniciarmos uma cadeia de promessas, por exemplo para fazer uma requisição HTTP, enquanto a resposta está pendente, ela retorna um Promise object. O objeto, por sua vez, define uma instância do método .then(). Ao invés de passar o retorno da função callback diretamente para a função inicial, ela é passada para .then(). Quando o resultado da requisição HTTP chega, o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método .then().

A cadeia de funções fetch().then().then() não significa que há múltiplas funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que cada instância de .then() retorna, por sua vez, um new Promise(). Toda a cadeia é lida de forma síncrona na primeira execução, e em seguida executada de forma assíncrona.

# Capturando erros com Promises

O manejo de erros é importante em operações assíncronas. Quando o código é síncrono, ele pode lançar pelo menos uma exceção mesmo sem nenhum tipo de tratamento de erros. Porém, no assíncrono, exceções não tratadas muitas vezes passam sem aviso e fica muito mais difícil de debugar.

Não há como utilizar o try/catch quando usamos o .then(), pois a computação só será efetuada após o retorno do objeto-Promise. Então devemos passar funções que executem as alternativas, para o caso de sucesso ou falha da operação. Por exemplo:

*function getUser(userId) {*
 *const userData = fetch(`https://api.com/api/user/${userId}`)*
   *.then(response => response.json())*
   *.then(data => console.log(data.name))*
   *.catch(error => console.log(error))*
   *.finally(() => /\*{ aviso de fim de carregamento }\*/)*
*}*

*getUser(1); // "Nome Sobrenome"*

Além do método .then() que recebe o objeto-Promise para ser resolvido, o método .catch() retorna no caso de rejeição da Promise. Além disso, o último método, .finally(), é chamado independente de sucesso ou falha da promessa e a função callback deste método é sempre executada por último e pode ser usada, por exemplo, para fechar uma conexão ou dar algum aviso de fim de carregamento.

# Resolvendo várias promessas

No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar Promise.all:

const endpoints = [
 "https://api.com/api/user/1",
 "https://api.com/api/user/2",
 "https://api.com/api/user/3",
 "https://api.com/api/user/4"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json()))

Promise.all(promises)
 .then(body => console.log(body.name))

Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled). Os estados possíveis, uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected). Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não muda mais de estado.