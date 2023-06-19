import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  isAddtimerVisible:boolean=false;

  time:number=0;
  timers:Array<number>=[];
  @ViewChildren(SimpleAlertViewComponent) alerts!: QueryList<SimpleAlertViewComponent>;

  constructor(private cdRef: ChangeDetectorRef){
   this.timers=[3,50,120]
  }
  ngAfterViewInit(): void {
    this.alerts.forEach(item=> {
   if(!item.title){
    item.title='Thaís y Freddy';
    item.message='Se casaron y tuvieron 4 hijos'
   }
   item.show();
    });
    this.cdRef.detectChanges();
  }
  ngAfterContentInit(): void {
    // this.alert.show();
    // this.alert.title='Hola';
    // this.alert.message='Thais te dejare me ire con la cajera del banco adios pendeja'
  }
  


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
    this.alerts.first.show();
  }

  // hiddenEndAlertVisible(){
  //   this.isEndAlertVisible=false;
  // }

  submitAddtimer(){
    this.timers.push(this.time);
    this.hiddenAddTimer();
  }

}
