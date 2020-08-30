import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { AppService } from './app.service';

// ? Timer Operatörü belirlenen saniye kadar bekleyebilir ve istersen tekrar edebilir.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myTimer = timer(1, 1000);
  subscribe;
  time = 0;
  endTimer = 0;
  status;
  constructor(private appService: AppService) {}

  startTimer(): void {
    this.status = true;
    if (this.time !== 0) {
      this.subscribe.unsubscribe();
      this.subscribe = this.myTimer.subscribe((data) => {
        this.time = data + this.endTimer;
      });
    } else {
      this.subscribe = this.myTimer.subscribe((data) => {
        this.time = data;
      });
    }
  }

  stopTimer(): void {
    this.status = false;
    this.endTimer = this.time;
    this.subscribe.unsubscribe();
  }

  resetAndStartTimer(): void {
    this.endTimer = 0;
    this.subscribe.unsubscribe();
    this.startTimer();
  }

  resetTimer(): void {
    this.status = false;
    this.time = 0;
    this.subscribe.unsubscribe();
  }
}
