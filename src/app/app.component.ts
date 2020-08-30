import { Component, OnDestroy } from '@angular/core';
import { range, Subscription } from 'rxjs';
import { AppService } from './app.service';

// ? Range Operatörü belirlenen sayı aralığını oluşturur.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
