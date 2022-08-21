import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validação dos campos
  public enderecoValido!: boolean;
  public complementoValido!: boolean;
  public numeroValido!: boolean;
  public formaPagamentoValido!: boolean;

  // estados primitivos dos campos (prestine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string) :void{
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    if(this.endereco.length >= 3)
      this.enderecoValido = true;
    else
      this.enderecoValido = false;
    //console.log(this.endereco);
  }
  public atualizaNumero(numero: string) :void{
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if(this.numero.length >= 1 && this.numero !== '0')
      this.numeroValido = true;
    else
      this.numeroValido = false;
    //console.log(this.numero);
  }
  public atualizaComplemento(complemento: string) :void{
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if(this.complemento.length > 0)
      this.complementoValido = true;
    //console.log(this.complemento);
  }
  public atualizaFormaPagamento(formaPagamento: string) :void{
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if(this.formaPagamento.length > 0)
      this.formaPagamentoValido = true;
    else
      this.formaPagamentoValido = false;
    //console.log(this.formaPagamento);
  }

}
