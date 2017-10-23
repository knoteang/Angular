import { Component, OnInit } from '@angular/core';
import { GetgraphService } from '../../services/getgraph.service';

@Component({
  selector: 'app-mycoin',
  templateUrl: './mycoin.component.html',
  styleUrls: ['./mycoin.component.css']
})
export class MycoinComponent implements OnInit {

  private coinOMG:datacoin; 
  private coinBTC:datacoin; 
  private coinETH:datacoin; 
  private coinXRP:datacoin; 

  constructor(private getgraphService:GetgraphService) { }

  ngOnInit() {

    this.getgraphService.getDataOMG().subscribe((response) => {
      this.coinOMG = response;
    }) 

    this.getgraphService.getDataBTC().subscribe((response) => {
      this.coinBTC = response;
    }) 

    this.getgraphService.getDataETH().subscribe((response) => {
      this.coinETH = response;
    }) 

    this.getgraphService.getDataXRP().subscribe((response) => {
      this.coinXRP = response;
    }) 

    }

}

interface datacoin {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  h24_volume_usd: string;
  market_cap_usd: string;
  available_supply: string;
  total_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
}
