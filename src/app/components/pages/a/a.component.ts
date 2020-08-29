import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit, OnDestroy {

  myTimer;
  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(
        startWith(0)
      )
      .subscribe(data => {
        this.myTimer = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
