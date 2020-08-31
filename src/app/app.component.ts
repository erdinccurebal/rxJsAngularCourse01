import { Component } from '@angular/core';
import { range } from 'rxjs';
import { AppService } from './app.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {

    range(1, 20).pipe(tap(data => console.log('Gelen Data: ' + data))).subscribe(data => console.log(data));

  }
}
