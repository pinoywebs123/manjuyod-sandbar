import { Injectable } from '@angular/core';
import { ServerConfig } from '../configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(username: string, password : string) {
    this.http.post(`${ServerConfig.API}/login`, {username, password})
    .subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err.status);
        if (err.status === 401) {
            alert('Invalid Username/Password');
        }
      }
    );

  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}





