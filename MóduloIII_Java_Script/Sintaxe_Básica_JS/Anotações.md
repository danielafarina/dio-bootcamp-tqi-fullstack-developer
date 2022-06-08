# Para quê serve o JS?

Para criar scripts dinâmicos que realizam a interação de apps ou páginas web.

# Boas Práticas

- Quando você cria o link lá no html, aperte CTRL e clique no script.js;
- Carregar o script ao final do body;
- Abrir o navegador e inspecionar a página, indo em CONSOLE;

# Variáveis

- Linguagem de tipagem fraca, significa dizer que se colocar umas aspas, ela já sabe que é uma string por exemplo. Se colocar o número, já sabe que é formato numérico. E assim vai;
- **typeOf** retorna o tipo da variável;
- **var**: escopo global, retorna indefined se eu não declarar nenhum valor;
- **let**: escopo local (declarada dentro de um bloco), por convenção;
- **const**: não pode retornar indefined. Sendo assim, precisa ser declarada. Também dá erro se ela for redefinida, porque valor constante não muda;
- Inicie com letras, underscore ou cifrão: não inicie com número;
- Não use palavras reservadas;
- Use o camelCase;
- Declare a variável no início do escopo;

# Operadores Lógicos

- &&: e
- ||: ou
- !: não

# Manipulando Arrays

- **forEach()** - itera um array;
- **push()** - add ao final;
- **pop()** - remove item no final;
- **shift()** - remove item no início;
- **unshift()** - add no início;
- **indexOf()** - retorna o índice;
- **splice()** - remove ou substitui um item pelo índice;
- **slice()** - retorna uma parte de um array existente;

# Objetos

Dados que possuem **propriedades** e **valores** que definem suas características. Declarados entre chaves.

# Funções

## Declarativas

São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada “function” seguida do nome da função, parênteses e chaves:

function nomeDaFuncao() { ${instrucao}; }; 

// o nome da função é obrigatório;

## Expressões de Funções

São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

var funcao = function nomeDaFuncao() {  ${instrucao}; } };

Ex. 2: var funcao = function() { ${instrucao}; };

## Arrow Function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

var funcao = () => { ${instrucao}; };