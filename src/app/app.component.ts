import { Component } from '@angular/core';
import { AppService } from './app.service';

// ? First Operatörü hata varsa geriye hata mesajı döner, tek obje geri getirir, net aramalar yapılır, tek harfden arama yapılmaz.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private appService: AppService
  ) {
    this.appService.myFnAjax().subscribe(data => {
      console.log(data);
    });
  }
}
