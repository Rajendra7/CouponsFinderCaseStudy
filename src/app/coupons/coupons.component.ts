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

  constructor(private couponService : CouponService) { }

  ngOnInit(): void {
    this.couponService.getBusCoupons().subscribe(data=>this.details=data);
    console.log(this.details);
  }

  
}
