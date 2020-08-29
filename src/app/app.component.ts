import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';
import { from, fromEvent, interval, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(ChildComponent, { static: false })
  childComponentRef: ChildComponent;

  @ViewChild('myInput')
  myInput: ElementRef;

  private subscription: Subscription;

  constructor(private appService: AppService) { }

  ngAfterViewInit(): void {

    const eventInput = fromEvent<any>(this.myInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
    );

    this.subscription = eventInput.subscribe(data => console.log(data));

    fromEvent(
      this.childComponentRef.myDateCaller.nativeElement,
      'click'
    ).subscribe((data) => {
      interval(1000).subscribe(() => {
        this.childComponentRef.myDate = new Date();
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
