import { HeartParams } from './like/like.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    likeCount:13,
    isLiked:false,
    customColor:"#FFCC00"
  };

  onHeartChange(params:HeartParams){
    this.post.likeCount += params.isLiked ? -1 : 1;
  }
}
