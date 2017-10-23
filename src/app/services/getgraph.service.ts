import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetgraphService {

  constructor(private http: Http) { }

  getDataOMG() {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/omisego/")
      .map((res) => res.json());
  }

  getDataBTC() {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/")
      .map((res) => res.json());
  }

  getDataXRP() {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/ripple/")
      .map((res) => res.json());
  }

  getDataETH() {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/ethereum/")
      .map((res) => res.json());
  }
}
