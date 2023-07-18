export class Conta {

    // Definindo os atributos
    saldo;
    agencia;
    numero;
    titular;

    // Definindo o contrutor
    constructor(agencia, numero, titular){
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    // Definindo os metodos
    depositar(valor){
        if (valor > 0){
            this.saldo += valor;
        }  
    }

    saque(valor){
        if (valor > 0){
            this.saldo += valor;
        }  
    }
}