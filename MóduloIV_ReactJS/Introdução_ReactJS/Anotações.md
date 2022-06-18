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

