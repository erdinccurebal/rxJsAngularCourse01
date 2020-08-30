import { Component } from '@angular/core';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myFrom = from([2, 44, 64, 75, 86, 95, 123, 432, 4564]);

  constructor(private appService: AppService) {
    // ? Parametre olarak int değer alır ve geriye int değer kadar obje çeker. Sondan Başa düzeninde verileri çeker.
    this.myFrom.pipe(takeLast(5)).subscribe((data) => console.log(data));
  }
}
