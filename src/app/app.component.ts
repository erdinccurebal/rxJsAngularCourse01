import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myHtmlInput') myHtmlInput: ElementRef;

  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    fromEvent<any>(this.myHtmlInput.nativeElement, 'keyup')
      .pipe(
        map((event) => event.target.value),
        debounceTime(400)
      )
      .subscribe((data) => console.log(data));
  }
}
