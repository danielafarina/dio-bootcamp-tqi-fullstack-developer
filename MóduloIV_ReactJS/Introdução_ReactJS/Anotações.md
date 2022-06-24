# NPM

npm (originalmente abreviação de Node Package Manager)[3] é um gerenciador de pacotes para o Node.JS

npm, Inc. é uma subsidiária do GitHub (uma subsidiária da Microsoft), que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git.

npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js. Ele consiste em um cliente de linha de comando, também chamado de npm, e um banco de dados online de pacotes públicos e privados pagos, chamado de registro npm. O registro é acessado por meio do cliente e os pacotes disponíveis podem ser navegados e pesquisados no site do npm. O gerenciador de pacotes e o registro são gerenciados pela npm, Inc.

O NPM permite, para além da criação de módulos, executar instruções ou conjuntos de instruções através de um comando criado pelo utilizador conforme a sua necessidade.

# ReactJS

Uma biblioteca JavaScript para criar interfaces de usuário. Não é framework. JQuery também é uma biblioteca. Foi criada por um engenheiro do Facebook e baseado no XHP, um framework para criação de HTML no PHP. Eles estavam tendo problemas com o feed de notícias. Em 2012, Instagram. 2013, liberação OpenSource. Posso utilizar React em mobile, desktop. Netflix a utiliza. jQuery ainda é muito usado, mas o pessoal está mudando para ReactJS.

React é declarativa. Não se preocupa se uma condição está sendo satisfeita ou não. Apenas se preocupa em exibir a interface.

É baseada em componentes.

Nubank, Netflix, Instagram, Facebook, iFood, etc.

# JSX

*const element = <\h1>Hello, world!</\h1>;*

Nem HTML, nem string!  Foi criado para poder criar elementos html com o poder do JS dentro dele.

É uma sintax sugar para React.createElement

Você pode usar aspas para especificar strings literais como atributos:

*const element = <\a href="https://www.reactjs.org"> link </\a>;*

Você também pode usar chaves para incorporar uma expressão JavaScript em um atributo:

*const element = <\img src={user.avatarUrl}></\img>;*

Não envolva chaves com aspas quando estiver incorporando uma expressão JavaScript em um atributo. Você deveria ou usar aspas (para valores em string) ou chaves (para expressões), mas não ambos no mesmo atributo.

### Atenção: ###

Como JSX é mais próximo de JavaScript que do HTML, o React DOM usa **camelCase** como convenção para nomes de propriedades ao invés dos nomes de atributos do HTML.

Por exemplo, *class* se transforma em *className* em JSX, e *tabindex* se transforma em *tabIndex*.

O Babel (um transpilador que) compila JSX para chamadas React.createElement(), porque o browser/aplicação não interpreta JSX.

Estes dois exemplos são idênticos:

*const element = (*
  *<\h1 className="greeting">*
    *Hello, world!*
  *</\h1>*
*);*

*const element = React.createElement(*
  *'h1',*
  *{className: 'greeting'},*
  *'Hello, world!'*
*);*


# SPA

Single page application. O normal seria eu ter várias páginas html (assim como eu havia pensado que funcionava antes). Mas com o React, não precisa. Com uma página só eu consigo mudar alguns componentes da minha index única e original.

# DOM Virtual

React "pensa" em como a interface deve estar a cada momento (comparando a DOM real com a virtual e vendo apenas o que mudou) ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.


# Estado e Ciclo de Vida

## Inicialização

props e state

## Montagem

componentWillMount -> render -> componentDidMount

## Atualização

toda vez que uma propriedade ou um estado são alterados, ele vai renderizar a página de novo.

## Desmontagem

componentWillUnmount

Nenhum componente pai ou filho deve saber se outro componente possui estado ou não. O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.

# [WEBPACK - GETTING STARTED](https://webpack.js.org/guides/getting-started/)

## TIPS

If you want to learn more about the inner workings of package.json, then we recommend reading the [npm documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

When installing a package that will be bundled into your production bundle, you should use *npm install --save*. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use *npm install --save-dev*. More information can be found in the [npm documentation](https://docs.npmjs.com/cli/v8/commands/npm-install).

As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a [configuration file](https://webpack.js.org/concepts/configuration/).

## CLI

> *mkdir webpack-demo*

> *cd webpack-demo*

> *npm init -y*

> *npm install webpack webpack-cli --save-dev*

> *npm install --save lodash*


Crie a pasta src e o arquivo index.js dentro dela:

*import _ from 'lodash';*

 *function component() {*
   *const element = document.createElement('div');*

  *// Lodash, now imported by this script*
   *element.innerHTML = _.join(['Hello', 'webpack'], ' ');*

   *return element;*
 *}*

 *document.body.appendChild(component());*

 Crie a pasta dist e o arquivo index.html dentro dela:

 *<!\DOCTYPE html>*
 *<\html>*
   *<\head>*
     *<\meta charset="utf-8" />*
     *<\title>Getting Started</\title>*
   *</\head>*
   *<\body>*
    *<\script src="main.js"></\script>*
   *</\body>*
 *</\html>*

 Mude o package.json:

 Tire a linha *"main": "index.js",* e acrescente a linha *"private": true* embaixo.


> *npx webpack*

Abra o index.html no browser e veja se está tudo certo.

Inclua na pasta webpack-demo o arquivo *webpack.config.js*:

*const path = require('path');*

*module.exports = {*
  *entry: './src/index.js',*
  *output: {*
    *filename: 'main.js',*
    *path: path.resolve(__dirname, 'dist'),*
  *},*
*};*


> *npx webpack --config webpack.config.js*

If a webpack.config.js is present, the webpack command picks it up by default. We use the --config option here only to show that you can pass a configuration of any name. This will be useful for more complex configurations that need to be split into multiple files.


Acrescente uma linha em package.json embaixo de *"test": "echo \"Error: no test specified\" && exit 1",* com os dizeres: *"build": "webpack"*.

Now the npm run build command can be used in place of the npx command


> *npm run build*



