import React from 'react';

function Button(props) { // a criação de componentes deve ser o mais pura possível, sem estado, sem vários elementos acompanhando o mesmo, pois eles irão ser reutilizados em outros momentos.
    const { name, onClick } = props // o mesmo que fazer const name = props.name, pois estou fazendo a desestruturação do objeto

    return (
        <button onClick={onClick}>{name}</button>
    )

}

export default Button