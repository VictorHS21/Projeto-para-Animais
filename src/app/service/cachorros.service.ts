import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cachorro } from "../module/cachorro";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CachorrosService {

  constructor(private http: HttpClient) {}

    protected UrlServiceV1: string = "http://localhost:3000/";

    obterCachorros() : Observable<Cachorro[]> {
        return this.http.get<Cachorro[]>(this.UrlServiceV1 + "cachorros");
    }

    obterCachorro(tipo: string) {
      return this.http.get<Cachorro>(this.UrlServiceV1 + "cachorros/" + tipo);
  }
}