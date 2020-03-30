import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from 'src/modals/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http : HttpClient) { }
  buscouponUrl = "../../assets/data/buscoupons.json"
  flightCouponUrl = "../../assets/data/flightcoupons.json"
  trainCouponUrl = "../../assets/data/traincoupons.json"
  hotelCouponUrl ="../../assets/data/hotelcoupons.json"
  fashionCouponUrl= "../../assets/data/fashioncoupons.json"
  paymentCouponUrl="../../assets/data/paymentcoupons.json"


  getBusCoupons() {
    return this.http.get(this.buscouponUrl)
  }

  getFlightCoupons(){
   return this.http.get(this.flightCouponUrl) 
  }

  getTrainCoupons(){
    return this.http.get(this.trainCouponUrl)
  }

  getHotelCoupons(){
    return this.http.get(this.hotelCouponUrl)
  }

  getFashionCoupons(){
    return this.http.get(this.fashionCouponUrl)
  }

  getPaymentCoupons(){
    return this.http.get(this.paymentCouponUrl)
  }

}
