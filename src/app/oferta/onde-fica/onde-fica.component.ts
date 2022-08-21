import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OffersService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica!: string;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) { }

  ngOnInit(): void {

    this.route.parent?.params.subscribe((parametros: Params) => {
      this.offersService.getOndeFicaOfertaPorId(parametros.id)
      .then((response: string) => {
        this.ondeFica = response;
      })
    })   
   }

}
