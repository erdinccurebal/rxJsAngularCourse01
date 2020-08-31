import { Component } from '@angular/core';
import { AppService } from './app.service';
import { reduce } from 'rxjs/operators';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myRange = range(5000850, 5000000);
  constructor(
    private appService: AppService
  ) {
    this.myRange.pipe(reduce((acc, value, index) => acc + value)).subscribe(data => console.log(data));
  }
}
