class Separado {
  constructor(numero, cedulaCliente, articulo, valor, abono, fechaSeparado, fechaVencimiento) {
    this.numero = numero;
    this.cedulaCliente = cedulaCliente;
    this.articulo = articulo;
    this.valor = valor;
    this.abono = abono;
    this.saldo = valor - abono;
    this.fechaSeparado = fechaSeparado;
    this.fechaVencimiento = fechaVencimiento;
  }
}