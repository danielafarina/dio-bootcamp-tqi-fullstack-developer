# Paradigmas

## Imperativo

Como você vai resolver o seu problema.

### Programação Procedural

### Orientação a objetos

Você precisa dizer como as coisas vão ser chamadas, a ordem e tudo mais. Os programas são objetos que possuem uma série de propriedades. Pilares: Herança, polimorfismo, encapsulamento e abstração.

### Processamento paralelo

## Declarativo

O que você vai fazer.

### Lógico

### Funcional

Você declara as coisas e elas acontecem.

### Base de dados

Um banco de dados em SQL, por exemplo.


# Pilares

## Abstração

Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo. Simplificar e generalizar cada vez mais.

## Herança

Objeto filho herda propriedades e métodos do objeto pai.

## Encapsulamento

Cada classe tem propriedades e métodos independentes do restante do código.

## Polimorfismo

Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.

# OOJS - JS orientado a objetos

## Protótipos

Todos os objetos JS herdam propriedades e métodos de um prototype. Por exemplo, um objeto (= {}) tem um método .toString; um array (= []) tem um método .forEach, bem como um .findIndex. Um objeto filho herda o protótipo do objeto pai.

## Classes

Na verdade, não existem. São uma syntatic sugar, uma sintaxe feita para facilitar a escrita. Todas as classes são objetos e a herança se dá por protótipos.

**Exemplo 1**:

*Antigamente*:

var Meal = function(food) {
    this.food = food
}

Meal.prototype.eat = function() {
    return ''😋"
}

*Hoje*:

class Meal {
    constructor (food) {
        this.food = food
    }

    eat() {
        return '😋'
    }
}

**Exemplo 2**:

*Classe Animal*:

class Animal {
    constructor(type = 'animal') {
        this.type = type
    }
    get type() {
        return this._type
    }
    set type(val) {
        this._type = val.toUpperCase()
    }
    makeSound() {
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type) //ANIMAL

*Classe Cat*:

class Cat extends Animal {
    constructor() {
        super('cat')
    }
    makeSound() {
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type) // CAT




