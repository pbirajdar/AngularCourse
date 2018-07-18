import { Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') cardTitle:string;
  isExpanded:boolean = false;

  onExpand(){
    this.isExpanded = ! this.isExpanded;
    console.log('clicked');
  }
}
