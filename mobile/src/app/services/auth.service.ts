import { Injectable } from '@angular/core';
import { ServerConfig } from '../configs/server.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password : string) {
    this.http.post(`${ServerConfig.API}/login`, {username, password})
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}





