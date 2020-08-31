import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { defer, fromEvent, merge, of, range } from 'rxjs';
import { AppService } from './app.service';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  myDate;

  @ViewChild('myHtmlTitle') myHtmlTitle: ElementRef;

  @ViewChild('myHtmlContent') myHtmlContent: ElementRef;

  @ViewChild('myHtmlDate') myHtmlDate: ElementRef;


  constructor(private appService: AppService) {
    defer(() => of(new Date())).subscribe((data) => this.myDate = data);
  }
  ngAfterViewInit(): void {
    const myTitle$ = fromEvent(this.myHtmlTitle.nativeElement, 'click').pipe(
      mapTo('Başlığa Tıklandı!')
    );

    const myContent$ = fromEvent(
      this.myHtmlContent.nativeElement,
      'click'
    ).pipe(mapTo('Paragrafa Tıklandı!'));

    const myDate$ = fromEvent(this.myHtmlDate.nativeElement, 'click').pipe(
      mapTo('Tarihe Tıklandı!')
    );

    merge(myTitle$, myContent$, myDate$).subscribe((data) => console.log(data));
  }
}
