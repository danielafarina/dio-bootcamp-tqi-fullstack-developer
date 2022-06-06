# História do JS

linguagem interpretada x linguagem compilada

- interpretada: compilação em tempo real, enquanto seu código está sendo executado, você vê os resultados;
- baseada em protótipos: conjunto de funções em comum às estruturas de dados;
- multiparadigma: orientação a objetos, programação funcional ou estruturada;
- client-side: linguagem que os browsers entendem, é a linguagem da Web;
- padrão ECMAScript: conjunto de normas que dizem as funcionalidades que estão sendo lançadas naquela linguagem.

# Evolução

1995 -  criado
1997 - segue padrão ECMAScript 1
1998 - segue padrão ECMAScript 2
1999 - segue padrão ECMAScript 3
2009 - segue padrão ECMAScript 5
2016 - segue padrão ECMAScript 6 (muita atualização para o JS)

# Aplicações

não é só fazer site. Linguagem muito versátil.

- web
- mobile
- smartwatches
- games
- internet of things
- APIs (com node)

# Node.js

ajuda a rodar o js do lado do servidor

# Pasta assets

tudo que vai compor o projeto, como imagens, o arquivo js, etc.

# Local da tag <script> 

Pode ser melhor que seja antes de fechar a tag <html>, pois uma vez que o código é lido de cima pra baixo, se o arquivo for muito grade, pode ser que ocorra de ficar executando o código antes mesmo de ter todos os elementos da página renderizados. Um exemplo onde isso dá errado, é justamente o exemplo contador da aula.

# Dica importante

Utilize o modo dev do navegador (ctrl + shift + i) e vá em Console (ao lado de Elements). Será bastante útil.

Por exemplo, use document.getElementsByTagName('h1'). O resultado retornará os índices dos elementos 'h1' e o tamanho desse conjunto de elementos, como se fosse uma array.

# Manipulando elementos

Depois de fazer o que manda o parágrafo acima, declare uma variável com nome de heading1:
*var heading1 = document.getElementsByTagName('h1')[0]*

e mude a cor dessa variável para vermelho:

*heading1.style.color = 'red'*

# Frameworks e bibliotecas

- VueJS
- Angular
- React
- jQuery (está caindo em popularidade, mas ainda está em uso)

É importante saber o "Vanilla" JavaScript antes de se aventurar por essas bibliotecas.
