export class Cuenta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(cantidad) { this.saldo += cantidad; }
    retirar(cantidad) { this.saldo -= cantidad; }
    obtenerSaldo() { return this.saldo; }
}
