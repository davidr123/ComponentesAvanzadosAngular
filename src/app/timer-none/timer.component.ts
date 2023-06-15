import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-none',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers:[TimerService],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None
})
export class TimerNoneComponent implements OnInit, OnDestroy {


  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;
  countDownendSuscription! : Subscription;
  countdown:number=0;
  countDownSubcription!: Subscription;

  constructor(public timerService: TimerService, private cdRef: ChangeDetectorRef){}


  ngOnInit(): void {
    
    this.timerService.restartCountdown(this.init);
   this.countDownendSuscription= this.timerService.countDownend$.subscribe(()=>{
   
      this.onComplete.emit();
    });
    
    this.countDownSubcription = this.timerService.countDown$.subscribe(data=> {
      this.countdown =data;
      this.cdRef.markForCheck();
      
    })
  }
  
  ngOnDestroy(): void {
   this.timerService.destroy();
   this.countDownendSuscription.unsubscribe();
  }

  get progress(){
    console.log('getting progress')
    return (this.init-this.countdown )/this.init*100
  }
 

}
