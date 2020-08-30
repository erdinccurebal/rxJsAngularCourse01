import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    this.appService.myDate.subscribe((data) => {
      console.log('Normal Date: ' + data);
    });

    this.appService.myTimer.subscribe(() => {
      this.appService.myDeferDate.subscribe((data) => {
        console.log('Defer Date: ' + data);
      });
    });
  }
}
