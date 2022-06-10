# Tipos de Erros

## ECMAScript Error

Erros que ocorrem em tempo de execução.

## DOMException

Erros relacionados ao Document Object Model. Mais relacionado à estrutura da sua página.


# Tratando erros

## Throw

if(!string) throw "String Inválida"; // vai retornar um erro "Uncaught String inválida"

## Return

if (!string) return "String Inválida"; // vai retornar "String Inválida"

## Try/catch

Permite que manipulemos todas as propriedades do erro de uma maneira mais personalizada e organizada.

## Finally

Instrução chamada independente de haver erro ou não.


# Objeto Error

new Error (message, fileName, lineNumber)

// todos os parâmetros são opcionais

const MEU_ERRO = new Error('Mensagem Inválida');

MEU_ERRO.name = 'InvalidMesssage'; // Uncaught InvalidMessage: Mensagem Inválida at <anonymous>:3:17

MEU_ERRO.stack = // <anonymous>:3:17

throw MEU_ERRO;