import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  details : Object=[
    {
      "image" : "../../assets/images/bus.png",
      "heading" : "Get Flat Rs.200 instant dicount on Bus booking on Red bus",
      "terms" : "on First Ever bus booking *Terms and conditions Apply",
      
    },
    {
      "image" : "../../assets/images/abhi.jpg",
      "heading" : "Get Flat Rs.250 cashback on Bus booking on Abhibus",
      "terms" : "on First Ever bus booking *Terms and conditions Apply"
    },
    {
      "image" : "../../assets/images/bus.png",
      "heading" : "Get Flat Rs.200 instant dicount on Bus booking on Red bus",
      "terms" : "on First Ever bus booking *Terms and conditions Apply",
      
    },
    {
      "image" : "../../assets/images/abhi.jpg",
      "heading" : "Get Flat Rs.250 cashback on Bus booking on Abhibus",
      "terms" : "on First Ever bus booking *Terms and conditions Apply"
    },
    {
      "image" : "../../assets/images/abhi.jpg",
      "heading" : "Get Flat Rs.250 cashback on Bus booking on Abhibus",
      "terms" : "on First Ever bus booking *Terms and conditions Apply"
    }
  ];

  constructor() {
    // this.details = [
        
    // ]
   }

  ngOnInit(): void {
  }

}
