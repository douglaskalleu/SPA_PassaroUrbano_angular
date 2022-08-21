import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OffersService } from '../offers.service';
import { Oferta } from '../shared/offers.model';

import '../utils/rxjs-extensions';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OffersService ]
})
export class TopoComponent implements OnInit {

  private subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertas!: Observable<Oferta[]>;
  
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // Retorna array Ofertas[]
                    .debounceTime(1000) // execute a ação do switchMa após 1 segundo
                    .distinctUntilChanged() // para fazer pesquisas distintas
                    .switchMap((termo: string) => {                      
                      if(termo.trim() === ''){
                        return Observable.of<Oferta[]>([])
                      }
                      return this.offersService.pesquisaOfertas(termo);
                    })
                    .catch((err: any) => {
                      console.error(err);
                      return Observable.of<Oferta[]>([]);
                    })
  }

  public pesquisa(termoDaPesquisa: string): void{
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void{
    this.subjectPesquisa.next('');
  }
}
