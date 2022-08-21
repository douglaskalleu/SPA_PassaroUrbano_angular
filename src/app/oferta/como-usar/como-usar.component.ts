import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OffersService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar!: string

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) { }  

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametros: Params) => {
      this.offersService.getComoUsarOfertaPorId(parametros.id)
          .then((response: string) => {
        this.comoUsar = response;
      })
    })    
   }
}
