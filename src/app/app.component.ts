import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mySubject = new AsyncSubject();

  constructor(private appService: AppService) {
    this.mySubject.subscribe((data) => console.log(data));

    this.mySubject.next('1.Değer Gönderildi.');
    this.mySubject.next('2.Değer Gönderildi.');
    this.mySubject.next('3.Değer Gönderildi.');
    this.mySubject.next('4.Değer Gönderildi.');
    this.mySubject.next('5.Değer Gönderildi.');
    this.mySubject.next('6.Değer Gönderildi.');
    this.mySubject.complete();
  }
}
