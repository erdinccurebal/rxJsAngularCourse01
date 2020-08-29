import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  constructor(private appService: AppService) {}
  ngAfterViewInit(): void {
    fromEvent(
      this.childComponentRef.myDateCaller.nativeElement,
      'click'
    ).subscribe((data) => {
      interval(1000).subscribe(() => {
        this.childComponentRef.myDate = new Date();
      });
    });
  }
}
