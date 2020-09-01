import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.appservice.mySubject.next('Test Componentden subject mesaj gönderildi!');
  }
}
