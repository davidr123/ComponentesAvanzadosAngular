import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAddtimerVisible:boolean=false;
  isEndAlertVisible:boolean=false;
  time:number=0;
  timers:Array<number>=[3,50,120]

  countEnd(){
    console.log("tiempo terminado")
  }

  showAddtimer(){
 this.isAddtimerVisible=true;
  }

  hiddenAddTimer(){
 this.isAddtimerVisible=false;

  }

  showEndAlertVisible(){
    this.isEndAlertVisible=true;
  }

  hiddenEndAlertVisible(){
    this.isEndAlertVisible=false;
  }

  submitAddtimer(){
    this.timers.push(this.time);
    this.hiddenAddTimer();
  }

}
