import { Component } from '@angular/core';
import { ApiService } from './services/myapi.service';
import { CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Timer Countdown';
  data: any;
  countdownConfig = { leftTime: 10, demand: true };
  starttime: number=0;
  endtimer: any;
  lblStartTime: Date = new Date();
  lblVisible: boolean = false;
  btnVisible:boolean=true;
  constructor(private apiService: ApiService)
  { 
    this.apiService.getData().subscribe((response)=>
    {
      
      this.data=response
      console.warn(this.data);    
      this.countdownConfig = { leftTime: this.data.CountDown, demand: true };
      console.warn(this.data.CountDown);  
      this.starttime=this.data.StartTime;
    })
  
  }
  onClick()
  {
    this.lblVisible = !this.lblVisible;
    this.btnVisible=!this.btnVisible;
  }
  onCountdownEvent(event: CountdownEvent) 
  {
    if (event.action === 'done') {
      
      this.apiService.getEndTimer().subscribe((response)=>this.endtimer=response);
      
    }
  }

}
