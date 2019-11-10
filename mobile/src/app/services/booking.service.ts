import { Injectable } from '@angular/core';
import { ServerConfig } from '../configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private token: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authServ: AuthService
  ) {
    this.token = this.authServ.getToken();
   }

  sendBooking(date: string, time: string, person: string) {
    this.http.post(`${ServerConfig.API}/send-booking?token=` + this.token, {date, time, person}).subscribe(
      (data) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      }
    )
  }
}
