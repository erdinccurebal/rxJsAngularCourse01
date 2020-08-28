import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { AppService } from './app.service';
import { ajax } from 'rxjs/ajax';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myLoading = 'Yükleniyor...';
  mySubject = new BehaviorSubject({
    id: this.myLoading,
    email: this.myLoading,
    username: this.myLoading,
    password: this.myLoading,
  });

  id;
  email;
  username;
  password;

  myInput = new FormControl('1');

  myInterval = interval(1000);
  myAjaxFn(id): Observable<any> {
    return ajax.getJSON<any>('http://localhost:3000/users/' + id);
  }

  constructor(private appService: AppService) {
    this.mySubject.subscribe((data) => {
      this.id = data['id'];
      this.email = data['email'];
      this.username = data['username'];
      this.password = data['password'];
    });

    this.myAjaxFn('1').subscribe((data) => this.mySubject.next(data));

    this.myInput.valueChanges.subscribe(id => {
        this.myAjaxFn(id).subscribe((data) => this.mySubject.next(data));
    });

  }

  stopSubject(): void {
    console.log('Stop Subject Fonksiyonu Çalıştı');
    this.mySubject.complete();
  }
}
