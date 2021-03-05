import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { assertPlatform, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { OrderResponse } from './order-response.model';
import { Order } from './order.model';
import { TechTrek } from './tech-trek.model';
import { TradeService } from './trade.service';
import { WalletBalance } from './wallet-balance.model';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  walletService;
  

  @ViewChild('f', { static: false }) tradeForm: NgForm;
  tradeMode = true;
  orderTypes = ["Buy", "Sell"];
  enteredAmount :number;
  orderCost: number;
  afterWalletBalance: number;
  orderResponse: OrderResponse;
  executedOrder: boolean = false;

  walletBalance: WalletBalance = new WalletBalance();
  techTrek: TechTrek = new TechTrek();

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
    this.getWalletBalanceFromService();
    this.tradeService.getAssetPrice().subscribe((response: TechTrek) => this.techTrek = response);
  }

  getWalletBalanceFromService() {
    if (this.walletService != null) {
      this.walletService.unsubscribe();
    }
    this.walletService = this.tradeService.getWalletBalance().subscribe((response: WalletBalance) => this.walletBalance = response);

  }

  onSubmit(form: NgForm){
    const value = form.value;
    
    var order : Order = new Order();
    order.orderType = value.orderType;
    order.assetAmmount = value.assetAmount;
    this.tradeService.executeOrder(order).subscribe((response: OrderResponse) => {
      this.orderResponse = response;
      this.walletBalance.cashBalance = this.orderResponse.cashBalance;
      this.walletBalance.assetBalance = this.orderResponse.assetBalance;
      this.executedOrder = true;
    });

    
  }

  onTradeEnable(){
    this.tradeMode = !this.tradeMode;
  }

  onKey(event){
    this.enteredAmount = event.target.value;
    this.orderCost = this.enteredAmount * this.techTrek.price;
    this.afterWalletBalance = this.walletBalance.cashBalance - this.orderCost;
  }



}
