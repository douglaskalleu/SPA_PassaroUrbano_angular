import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OffersService } from '../offers.service';
import { Oferta } from '../shared/offers.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OffersService ]
})
export class TopoComponent implements OnInit {

  private subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertas!: Observable<Oferta[]>
  
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
                    .debounceTime(1000)
                    .switchMap((termo: string) => {
                      console.log('Request Http for API')
                      
                      if(termo.trim() === ''){
                        return Observable.of<Oferta[]>([])
                      }

                      return this.offersService.pesquisaOfertas(termo);
                    })
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }

  public pesquisa(termoDaPesquisa: string): void{
    // this.ofertas = this.offersService.pesquisaOfertas(termoDaPesquisa);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (err: any) => console.error('Erro status:', err.status),
    //   () => console.log('Fluxo de eventos completo!')
    // )
    console.log('keyUp: ', termoDaPesquisa)
    this.subjectPesquisa.next(termoDaPesquisa);
  }
}
