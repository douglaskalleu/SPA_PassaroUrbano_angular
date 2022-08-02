import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../offers.service';
import { Oferta } from '../shared/offers.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OffersService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta!: Oferta
  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.offersService.getOfferId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    })
   }

}
