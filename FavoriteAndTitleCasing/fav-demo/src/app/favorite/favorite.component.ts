import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isLike : boolean;

  constructor() { }

  ngOnInit() {
  }
  onHeartClick(){
    this.isLike = !this.isLike;
    console.log("Heart clicked!");
  }
}
