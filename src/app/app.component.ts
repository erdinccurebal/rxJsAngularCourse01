import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { AppService } from './app.service';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private appService: AppService) {}

  @ViewChild('myHtmlButton') myButton: ElementRef;

  myInterval = interval(1000);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const myFromEvent = fromEvent<any>(this.myButton.nativeElement, 'click');

    this.myInterval.pipe(skipUntil(myFromEvent)).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {}
}
