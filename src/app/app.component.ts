import { Component } from '@angular/core';
import { AppService } from './app.service';
import { forkJoin } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {
    forkJoin({
      users: ajax.getJSON('https://jsonplaceholder.typicode.com/users'),
      posts: ajax.getJSON('https://jsonplaceholder.typicode.com/posts'),
      photos: ajax.getJSON('https://jsonplaceholder.typicode.com/photos')
    }).pipe(startWith('Loading...')).subscribe(data => {
      console.log(data);
    });
  }
}
