import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { range, Subscription } from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit, OnDestroy {
  myRange = range(0, 51);
  myHtmlRange = new Array();
  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subscription = this.myRange.subscribe(data => {
        this.myHtmlRange.push(data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
