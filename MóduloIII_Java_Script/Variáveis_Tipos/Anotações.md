# Hoisting

Hoisting é o termo que explica essa situação, em português ele significa “içamento”, ou “elevação” e foi citado pela primeira vez no ECMAScript® 2015 Language Specification. O Hoisting permite que você execute funções antes das suas declarações. Na prática, inicialmente as declarações de funções são colocadas na memória durante a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.

console.log(soma(2, 5))
function soma(a, b) {
return a + b
}

A razão pela qual o código anterior funciona é que os mecanismos JavaScript movem a função soma para o início do escopo, como ilustra o código abaixo:

function soma(a,b){
    return a + b
}
console.log(soma(2,5))

Entretanto, será que Hoisting funciona em outros tipos de código? Vamos conferir!

console.log(alura)
var alura = ‘cursos’;

Este código retorna:

undefined

A utilização de Hoisting em var não é indicada, pois a variável criada é elevada para o escopo, mas sem o seu valor, e com isso, retorna valor undefined.

O comportamento é parecido utilizando também var function:

function testaHoisting() {
    console.log(‘testaHoisting’, alura)
    var alura = ‘cursos’
}

Este código retorna: undefined.

Hoisting também não é indicado utilizando let, pois acontece um outro tipo de comportamento não desejado:

console.log(alura)
let alura = ‘cursos’;

Este código retorna:

script.js:1 Uncaught ReferenceError: Cannot access 'alura' before initialization```


# Constantes

- Declarada em SNAKE_UPPER_CASE;

const FIRST_NAME = "Dani";

- Não se pode redeclarar nem reatribuir uma constante.


# Let

- Escopo de bloco: vai ficar dentro do bloco, não podendo ser utilizada fora dele;
- Posso reatribuir;


# Var

- Escopo global: fica disponível para ser usada fora do bloco;
- Posso reatribuir;
- Posso redeclarar.


# Strings

- Uma forma de concatenar = nome + " " + sobrenome;

- Se quiser pular uma linha = nome + "\n" + sobrenome;

- Outra forma mais inteligente (entre crases) = \`${nome} ${sobrenome}`;

- Para pular linhas = \`${nome} (dá enter aqui) ${sobrenome}`;

- Para conseguir imprimir o valor de aspas = "\"";

- Existem vários métodos interessantes: .split, .length, etc


# Numbers

- Math.PI: pi;
- Math.floor: arredonda pra baixo;
- Match.ceil: arredonda pra cima;
- .toString();


# Booleans

let validation = 3 === 0;
\> false

# Arrays


# Objetos

let person = {
    name : 'John',   // é vírgula, e não ponto-vírgula.
    age: 20
};

- Existem vários métodos que posso utilizar;
- person.name;
- person.age;
- Object.keys(person);
- Object.values(person);

# Empty, null e undefined

## Empty

Se é um número, você declarou como zero; se é uma string, como "", e assim vai.
Ex: setinha cookies (nome da variável) apontando pra uma caixinha vazia (conteúdo da variável).
let abacaxi = "";

## Null

De propósito, você quer que aquele valor não exista, quer que ele seja nada.
Ex: setinha cookies apontando pra nada.
let abacaxi = null;

## Undefined

Esse valor não existe.
Ex: sem setinha cookies.

## Todos eles são diferentes de true. Então quando você não quer que ele seja nenhum desses, use !true