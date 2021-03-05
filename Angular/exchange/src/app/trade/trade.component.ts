import { Component, OnInit } from '@angular/core';
import { TechTrek } from './tech-trek.model';
import { TradeService } from './trade.service';
import { WalletBalance } from './wallet-balance.model';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  //styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  
   walletBalance : WalletBalance = new WalletBalance();
   techTrek : TechTrek = new TechTrek();

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    this.tradeService.getWalletBalance().subscribe((response: WalletBalance) => this.walletBalance = response);
    this.tradeService.getAssetPrice().subscribe((response: TechTrek) => this.techTrek = response);
  }

}
