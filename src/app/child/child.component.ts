import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  myDate;

  @ViewChild('dataCaller') myDateCaller: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
