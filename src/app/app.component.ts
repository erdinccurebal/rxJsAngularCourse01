import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ajax } from 'rxjs/ajax';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(finalize(() => console.log('Veri çekme işlemi tamamlandı!')))
      .subscribe((data) => console.log(data));
  }
}
