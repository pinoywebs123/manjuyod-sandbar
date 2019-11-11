import { Injectable } from '@angular/core';
import { ServerConfig } from '../configs/server.config';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private token: string;
  constructor(
    private http: HttpClient,
    private authServ: AuthService,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.token = this.authServ.getToken();
   }

  sendBooking(date: string, time: string, person: string) {
    this.http.post(`${ServerConfig.API}/send-booking?token=` + this.token, {date, time, person}).subscribe(
      (data) => {
        console.log(data);
        if(data['status'] === 200){
          this.presentAlert('You have successfully Booked!');
          this.router.navigateByUrl('/history');
        }
      }, (err) => {
        console.log(err);
      }
    )
  }

  getBooking() {
    return this.http.get(`${ServerConfig.API}/get-bookings?token=` + this.token);
  }

  async presentAlert(display) {
    const alert = await this.alertController.create({
      header: 'Success...',
      message: display,
      buttons: ['OK']
    });

    await alert.present();
  }
}
