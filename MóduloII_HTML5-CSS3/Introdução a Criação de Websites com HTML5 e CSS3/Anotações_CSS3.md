# Regra CSS

Formada por um seletor/grupo de seletores (elementos HTML) e um par de chaves com declarações (propriedade: valor).
Ex: a, p, h1, h3 {
color: blue;
font-size: 14px;
}

# ID x CLASS

<header id="header" ...>
<header class="header"...>

#header {
padding: 10px;
}

.header {
padding: 15px;
}

## Atenção!

Um id só pode ser usado uma vez na página.

# Box model

margin (margem)
border (borda)
padding (preenchimento)
content (conteúdo)

vertical
horizontal

superior
direito
inferior
esquerdo

## Border

Largura: pixels, cm, mm...
Cor: blue, #0000ff
Estilo: sólida, pontilhada, tracejada...

.post {
    border: 3px solid ##blue;
    border-top: 2px dotted #green;
    border-right: 4px dashed ##pink;
}

### Border Radius

border-radius: 10px;
border-radius: 50%;
border-radius: 10% 20%;
border-radius: 10% 20% 15% 22%

### Atenção! Border Radius em 50% transforma o quadrado em círculo!