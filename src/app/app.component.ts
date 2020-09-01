import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, throwError, of } from 'rxjs';
import { AppService } from './app.service';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myHtmlInput') myInput: ElementRef;
  @ViewChild('myHtmlButton') myButton: ElementRef;

  constructor(private appService: AppService) {}
  ngAfterViewInit(): void {
    fromEvent(this.myButton.nativeElement, 'click').subscribe(() =>
      this.myFnInput()
    );
  }

  myFnInput(): void {
    const elem = this.myInput.nativeElement.value;
    of(elem)
      .pipe(
        map((data: string) => {
          if (data.length > 6) {
            throw new Error('Bu değer altıdan büyüktür');
          } else {
            return 'Bu değer başarılıdır.';
          }
        }),
        catchError((err) => throwError(err))
      )
      .subscribe((data) => console.log(data));
  }
}
