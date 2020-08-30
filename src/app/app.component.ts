import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable, range } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myRange: Observable<number> = range(5, 10);

  constructor(private appService: AppService) {
    this.myRange
      .pipe(mapTo('Veri Değiştirildi.'))
      .subscribe((data) => console.log(data));
  }
}
