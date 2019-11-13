import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
    private alertController: AlertController
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
            this.presentAlert('Invalid Username/Password Combination!');
        }
      }
    );

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  getToken() {
     const token = JSON.parse(localStorage.getItem('token'));
     return token;
  }
  async presentAlert(display) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: display,
      buttons: ['OK']
    });

    await alert.present();
  }

  registerCustomer() {

  }

  checkUserToken() {

  }
}





