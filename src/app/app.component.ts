import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { AppService } from './app.service';
import { ajax } from 'rxjs/ajax';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    const ajaxUsers = ajax
      .getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data) => {
          return { users: data };
        })
      );
    const ajaxPosts = ajax
      .getJSON('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data) => {
          return { posts: data };
        })
      );
    const ajaxPhotos = ajax
      .getJSON('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((data) => {
          return { photos: data };
        })
      );

    concat(ajaxUsers, ajaxPosts, ajaxPhotos).subscribe((data: any) =>
      console.log(data)
    );
  }
}
