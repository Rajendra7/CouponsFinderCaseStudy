import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/modals/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http : HttpClient) { }
  couponUrl = "../../assets/data/buscoupons.json"

  getBusCoupons() {
    return this.http.get(this.couponUrl)
  }



}
