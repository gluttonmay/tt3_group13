import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { WalletBalance } from './wallet-balance.model';
import { Observable, Subject, timer } from 'rxjs';
import {map, retry, switchMap, tap} from 'rxjs/operators'
import { TechTrek } from './tech-trek.model';
import { Order } from './order.model';
import { OrderResponse } from './order-response.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  accountKey = "cc9fd35f-3d59-4700-8d78-ad5405c767ad"
  walletBalanceURL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance"
  currentAssetPriceURL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current"
  currentPriceURl = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current"
  executeOrderURL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
  User = "Group13"
  Pw = "QZAesJtZdQQyAJX"
  apiKey = "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"
  walletChanged = new Subject<WalletBalance>();
 httpHeaders = {
  "x-api-key": this.apiKey,
  }
  constructor(private http: HttpClient) { }
  


  getWalletBalance() {
     
     return  this.http.post<WalletBalance>(this.walletBalanceURL, {"accountKey" : this.accountKey}, {headers: this.httpHeaders});
  }

  getAssetPrice() {
    return timer(1, 60000).pipe(switchMap(() => 
    this.http.post<TechTrek>(this.currentAssetPriceURL,  {"accountKey" : this.accountKey}, {headers: this.httpHeaders})
    ), retry());
    
  }

  executeOrder(order : Order) {
    order.accountKey = this.accountKey;
    var jsonOrder = {
      "accountKey" : order.accountKey,
      "orderType" : order.orderType,
      "assetAmount" : order.assetAmmount
    }
    return this.http.post<OrderResponse>(this.executeOrderURL, jsonOrder, {headers: this.httpHeaders});
  }


}
