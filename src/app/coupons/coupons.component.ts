import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';
import { Coupon } from 'src/modals/coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  details:any;
  flights :any;
  trains:any;
  hotels:any;
  fashions:any;
  payments:any;

  constructor(private couponService : CouponService) { }

  ngOnInit(): void {
    this.couponService.getBusCoupons().subscribe(data=>this.details=data);
    
    this.couponService.getFlightCoupons().subscribe(flight=>this.flights=flight);

    this.couponService.getTrainCoupons().subscribe(train=>this.trains=train);

    this.couponService.getHotelCoupons().subscribe(hotel=>this.hotels=hotel);

    this.couponService.getFashionCoupons().subscribe(fashion=>this.fashions=fashion);

    this.couponService.getPaymentCoupons().subscribe(payment=>this.payments=payment);
  }

  flip() {
    
  }

  
}
