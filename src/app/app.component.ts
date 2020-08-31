import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { AppService } from './app.service';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myHtmlButton') myHtmlButton: ElementRef;

  constructor(private appService: AppService) {}
  ngAfterViewInit(): void {
    const myInterval = interval(1000);

    fromEvent(this.myHtmlButton.nativeElement, 'click')
      .pipe(withLatestFrom(myInterval))
      .subscribe(data => console.log(data[1]));
  }
}
