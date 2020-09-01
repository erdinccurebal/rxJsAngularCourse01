import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySubject = new ReplaySubject(3);
  constructor(
    private appService: AppService
  ) {
    this.mySubject.next('1.üst veri gönderildi.');
    this.mySubject.next('1.üst veri gönderildi.');
    this.mySubject.next('1.üst veri gönderildi.');
    this.mySubject.next('1.üst veri gönderildi.');
    this.mySubject.next('1.üst veri gönderildi.');
    this.mySubject.subscribe(data => console.log(data));
    this.mySubject.next('1.alt veri gönderildi.');
    this.mySubject.next('1.alt veri gönderildi.');
    this.mySubject.next('1.alt veri gönderildi.');
    this.mySubject.next('1.alt veri gönderildi.');
    this.mySubject.next('1.alt veri gönderildi.');
    this.mySubject.next('1.alt veri gönderildi.');

    this.mySubject.next('2.üst veri gönderildi.');
    this.mySubject.subscribe(data => console.log(data));
    this.mySubject.next('2.alt veri gönderildi.');
    this.mySubject.next('2.alt veri gönderildi.');
  }
}
