import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : Object[];

  constructor() { 
    this.news =[
      {
        "image":"../../assets/images/story.png",
        "head" : "Coronavirus LIVE: Even 10,000 ventilators won't help if infections explode, says Delhi health minister",
        "news" : "The government on Sunday decided to clamp down on the free movement in 80 districts across the country where authorities have reported confirmed cases of the novel coronavirus. On Monday, the death toll due to Covid-19 in India rose to 8. At present, Delhi, Mumbai and Kolkata are observing a lockdown with suspension of metro and other public transport facilities apart."
      },
      {
        "image":"../../assets/images/story.png",
        "head" : "Coronavirus LIVE: Even 10,000 ventilators won't help if infections explode, says Delhi health minister",
        "news" : "The government on Sunday decided to clamp down on the free movement in 80 districts across the country where authorities have reported confirmed cases of the novel coronavirus. On Monday, the death toll due to Covid-19 in India rose to 8. At present, Delhi, Mumbai and Kolkata are observing a lockdown with suspension of metro and other public transport facilities apart."
      }
    ]
  }

  ngOnInit(): void {
  }

  flipped = false;
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  flipIt() {
    this.flipped = !this.flipped;
  }
 


}
