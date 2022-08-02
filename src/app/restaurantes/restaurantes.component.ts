import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OffersService ]
})
export class RestaurantesComponent implements OnInit {
  public ofertas!: Oferta[];
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOfertasCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    })
  }

}
