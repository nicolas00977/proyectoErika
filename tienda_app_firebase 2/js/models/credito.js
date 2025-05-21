class Credito {
  constructor(numero, cedulaCliente, articulo, valor, abono) {
    this.numero = numero;
    this.cedulaCliente = cedulaCliente;
    this.articulo = articulo;
    this.valor = valor;
    this.abono = abono;
    this.saldo = valor - abono;
  }
}