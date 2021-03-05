import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { WalletBalance } from './wallet-balance.model';
import { Observable } from 'rxjs';
import { TechTrek } from './tech-trek.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  accountKey = "cc9fd35f-3d59-4700-8d78-ad5405c767ad"
  walletBalanceURL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance"
  currentAssetPriceURL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current"
  currentPriceURl = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current"

  User = "Group13"
  Pw = "QZAesJtZdQQyAJX"
  apiKey = "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"
  walletBalance = WalletBalance;
  constructor(private http: HttpClient) { }

  getWalletBalance() {
     
     return this.http.post<WalletBalance>(this.walletBalanceURL, {"accountKey" : this.accountKey}, {headers: {"x-api-key": this.apiKey}});
  }

  getAssetPrice() {
    return this.http.post<TechTrek>(this.currentAssetPriceURL,  {"accountKey" : this.accountKey}, {headers: {"x-api-key": this.apiKey}});
  }

}
