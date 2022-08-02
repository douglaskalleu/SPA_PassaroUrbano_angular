import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from "./shared/offers.model";
import { URL_API } from './app.api';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class OffersService { 
    constructor(private http: HttpClient){}
    
    // public async getOfertas(){
    //     return await (await fetch(`${URL_API}/ofertas?destaque=true`)).json();
    // }    

    // TODO :: passar todas os responses para inferencia de tipo correnta - HttpReponse
    public async getOfertas(): Promise<Oferta[]>{
        return await this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((res: any) => { return res });
    }    

    // public async getOfertasCategoria(categoria: string) :Promise<Oferta[]> {
    //     return await (await fetch(`${URL_API}/ofertas?categoria=${categoria}`)).json();
    // }

    public async getOfertasCategoria(categoria: string) :Promise<Oferta[]> {
        return await this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((res: any) => res);
    }

    // public async getOfferId(id: number): Promise<Oferta>{
    //     var response = await (await fetch(`${URL_API}/ofertas?id=${id}`)).json();
    //     return response.shift();
    // }

    public async getOfferId(id: number): Promise<Oferta>{
        return await this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((res: any) => {return res[0]});
    }

    // public async getComoUsarOfertaPorId(id: number): Promise<string>{
    //     var response = await (await fetch(`${URL_API}/como-usar?id=${id}`)).json();
    //     return response[0].descricao;
    // }

    public async getComoUsarOfertaPorId(id: number): Promise<string>{
        return await this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((res: any) => { return res[0].descricao });
    }

    // public async getOndeFicaOfertaPorId(id: number): Promise<string>{
    //     var response = await (await fetch(`${URL_API}/onde-fica?id=${id}`)).json();
    //     return response[0].descricao;
    // }

    public async getOndeFicaOfertaPorId(id: number): Promise<string>{
        return await this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((res: any) => {return res[0].descricao});
    }

    // TODO :: Ver como deixar async
    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((response: any) => response);
    }
} 