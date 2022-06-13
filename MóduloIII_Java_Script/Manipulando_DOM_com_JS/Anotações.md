# Document Object Model

Tags, ids (só posso ter 1) e classes (quando vc quer que mais de um elemento tenha o mesmo identificador).

## Métodos

- Procura por id: document.getElementById('titulo');

- Procura por tag: document.getElement*s*ByTagName('li');
Vai retornar um array.

- Procura por classe: document.getElement*s*ByClassName('textos');
Vai retornar um array. Precisaremos acessar o index correto para manipular aquele elemento na página.

- document.querySelectorAll('.primeira-classe .segunda-classe');
Vai retornar elementos que pertençam a essas duas classes.

- document.querySelectorAll('li .opcao');
Fazemos uma busca combinando uma tag e uma classe.

- document.creatElement(element);
Cria um novo elemento HTML.

- document.removeChild(element);
Remove um elemento.

- document.appendChild(element);
Adiciona um elemento.

- document.replaceChild(new, old);
Substitui um elemento.


## Eventos

Qualquer tipo de ação que um usuário faz na página da Web.

### Mouse

Mouseover, mouseout

### Clique

Click, dbclick

### Atualização

Change, load





