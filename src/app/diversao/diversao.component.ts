import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OffersService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas!: Oferta[];
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOfertasCategoria('diversao')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    })
  }
}
