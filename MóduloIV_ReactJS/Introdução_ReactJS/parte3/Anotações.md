Execução na parte2

# Manipulando Eventos

É muito semelhante manipular eventos em React e no DOM.

Porém, em React, são nomeados usando camelCase ao invés de letras minúsculas:

const Button = <\button onClick={}>Mostrar evento</\button> (se fosse html, seria *"onclick"*)

E com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

# Pensando do Jeito React

- Comece com um Mock;

- Separe a UI em uma hierarquia de componentes;

- Crie uma versão estática em React;

- Identifique a representação Mínima (mas completa do State da UI);

- Identifique onde o State deve ficar;

- Adicione o fluxo de dados inverso;

- Deixe sempre o projeto modular.

- Dentro de src: components, containers, index.html
