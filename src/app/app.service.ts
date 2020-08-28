import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  myTitle = 'Erdinç Cürebal';
  myDescription = 'Full Stack Developer';
  myGithubAccount = ajax
    .getJSON('https://api.github.com/users/erdinccurebal')
    .pipe(
      map((data: any) => {
        return {
          id: data['id'],
          fullname: data['name'],
          username: data['login'],
          bio: data['bio'],
          web_site: data['blog'],
          github_url: data['html_url'],
          avatar_url: data['avatar_url'],
        };
      })
    );

  mainObservable = new Observable((observer) => {
    observer.next(this.myTitle);
    observer.next(this.myDescription);
    this.myGithubAccount.subscribe((data) => observer.next(data));
  });

  constructor() {}
}
