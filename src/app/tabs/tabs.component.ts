import { AfterContentInit, Component, ContentChild, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {



  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  clickSubscription: any[]=[] ;

  ngOnInit(): void {
    console.log("tabs de componente padre");
  }

  ngOnDestroy(): void {
   if(this.clickSubscription){
    this.clickSubscription.forEach(item=> item.unsubscribe())
   }
  }

  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.tabs.forEach(tab=> {
    let subscription =  tab.onClick.subscribe(()=> {
      console.log(`tab ${tab.title} content clicked`)
    });
    this.clickSubscription.push(subscription)
    });
    this.selectTab(this.tabs.first);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab => tab.isActive= false);
    tab.isActive=true;
  }
  
}
