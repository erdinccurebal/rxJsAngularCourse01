import { Component } from '@angular/core';
import { from } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myString = 'Deneme';

  mySubscribe;
  constructor(
    private appService: AppService
  ) {
    from(this.myString).pipe(delay(2000), tap(data => {
      console.log(data);
    }))
      .subscribe(data => {
      console.log(data);
    })

    this.appService.myAjax.subscribe(data => {
      console.log(data);
      });
  }

  stopSubscribe(): void {
    this.mySubscribe.unsubscribe();
  }
}
