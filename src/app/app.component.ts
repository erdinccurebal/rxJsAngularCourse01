import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myBehaviorSubject = new BehaviorSubject('Loading...');
  constructor(
    private appService: AppService
  ) {
    this.myBehaviorSubject.subscribe(data => console.log(data));

    this.myBehaviorSubject.next('Erdinç Cürebal');
    this.myBehaviorSubject.next('Full Stack Developer');

  }
}
