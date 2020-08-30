import { Component } from '@angular/core';
import { AppService } from './app.service';

// ? Filter Operatorü dizin getirir ve net aramalar yapılır tek harf aranmaz.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {
    this.appService.findAll().subscribe(data => console.log(data));

  }
}
