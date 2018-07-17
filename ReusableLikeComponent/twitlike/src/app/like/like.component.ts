import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('like-count') likeCount:number;
  @Input('is-like') isLiked:boolean=false;
  @Input('selected-color') colorCustom:string;
  @Output('heart-change') heartChange = new EventEmitter();
  colorDefault:string = "#cccccc";

  onHeartClick(){
    let parmeters:HeartParams = {likeCount:this.likeCount, 
                                  isLiked:this.isLiked, 
                                  colorCustom:this.colorCustom};
    this.isLiked = !this.isLiked;  
    this.heartChange.emit(parmeters);
  }
}

export interface HeartParams {
  likeCount:number,
  isLiked:boolean,
  colorCustom:string
}