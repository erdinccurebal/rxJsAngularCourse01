import { Component } from '@angular/core';
import { AppService } from './app.service';

// ? Find operatorü tek obje döner ve net aramalar yapılır , tek harf aranmaz, hata mesajı dönmez.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    this.appService.myFnAjax().subscribe(
      (data) => console.log(data),
      (error) => console.log('Error: ' + error),
      () => 'Ajax isteği tamamlandı.'
    );
  }
}
