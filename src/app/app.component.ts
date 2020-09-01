import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<object>;

  constructor(private appService: AppService) {
    this.appService.mySubject.subscribe((data) => console.log(data));
    this.postsLocalStorage();
  }

  postsLocalStorage(): void {
    const posts = localStorage.getItem('posts');
    if (posts) {
      console.log('LocalStorage de posts verileri var');
      this.posts = JSON.parse(localStorage.getItem('posts'));
    } else {
      ajax
        .getJSON('https://jsonplaceholder.typicode.com/posts')
        .subscribe((data: any) => {
          localStorage.setItem('posts', JSON.stringify(data));
          this.posts = data;
        });
    }
  }
}
