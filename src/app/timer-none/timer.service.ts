import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private countdownTimerRef:any = null;
  public countdown:number = 0;
  paused:boolean=true;
  init:number=0;
  private countDownEndsource= new Subject<void>
  private countDownSource= new BehaviorSubject<number>(0);
  countDownend$= this.countDownEndsource.asObservable();
  countDown$= this.countDownSource.asObservable();
  constructor() { }


  destroy(): void {
    this.clearTimeout();
  }
  restartCountdown(init?:number){
    if(init)
      this.init= init;
    if(this.init && this.init >0){
      this.paused=true;
      this.clearTimeout();
      this.countDownSource.next(this.init);
      // this.doCountdown();
    }
  }

  toogleCountDown(){
    this.paused= !this.paused;
    if(this.paused === false){
      this.doCountdown()
    }else{
      this.clearTimeout()
    }
  }

  private doCountdown(){
    this.countdownTimerRef = setTimeout(()=>{
      this.countDownSource.next(this.countDownSource.getValue() -1);
      this.processCountdown();
    }, 1000);
  }

  private processCountdown(){
    if(this.countDownSource.getValue() <= 0){
      this.countDownEndsource.next();
    
    }
    else{
      this.doCountdown();
    }
  }

  private clearTimeout(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  
}
