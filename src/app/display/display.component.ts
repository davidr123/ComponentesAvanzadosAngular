import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {

  @Input() time!:number;
  minutes:string="00";
  seconds:string="00";

  ngOnChanges(changes: SimpleChanges){
    if(changes['time'].currentValue){
      const minutes = Math.trunc(changes['time'].currentValue / 60);
      const seconds = changes['time'].currentValue - minutes * 60; 

      this.minutes = ("0" + minutes).substring(-2);
      this.seconds = ("0" + seconds).substring(-2);

    }
  }

}
