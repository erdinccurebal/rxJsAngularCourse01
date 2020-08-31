import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    of('null')
      .pipe(startWith('Yükleniyor...'))
      .subscribe((data) => console.log(data));
  }
}
