import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Oferta } from '../shared/offers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OffersService ]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[];
  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOfertas()
      .then((ofertas: Oferta[]) => {        
        this.ofertas = ofertas
      })
      .catch((param: any) => {
      })
  }
}
