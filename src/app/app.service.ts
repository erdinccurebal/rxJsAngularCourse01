import { Injectable } from '@angular/core';
import { defer, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  myTimer = timer(3000);
  myDate = of(new Date());
  myDeferDate = defer(() => of(new Date()));

  constructor() {}
}
