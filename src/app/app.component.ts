import { Component } from '@angular/core';
import { AppService } from './app.service';

// ? Last Operatörü son objeyi döner,Koşullu bir şekildede sondakini getirebilir üçe bölünenlerin en sonu gibi.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {
    this.appService.findAllUser().subscribe(data => console.log(data));
  }
}
