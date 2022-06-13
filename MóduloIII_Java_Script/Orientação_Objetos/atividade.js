class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // para usar o get e o set coloco underline
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {               // No console: minhaConta = new ContaCorrente(2494, 311353, false); 
    constructor(agencia, numero, cartaoCredito) {               // Ele vai criar um objeto: minhaConta = ContaCorrente {agencia: 2494, numero: 311353, tipo: 'corrente', _saldo: 0, _cartaoCredito: false}
        super(agencia, numero);                                                  // Se eu fizer: minhaConta.saldo, ele retorna: 0. Se eu fizer: minhaConta.depositar(10), ele vai depositar 10. Se eu fizer: minhaConta.sacar(9), ele vai sacar 9.
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia,numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia,numero) {
        super(agencia, numero); // o método super() passa os argumentos enviados para a classe ascendente
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500) {
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}