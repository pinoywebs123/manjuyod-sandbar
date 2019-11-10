import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    private res_date : string = '';
    private res_time : string = '';
    private res_persons : string = '';
  constructor(
    private router: Router,
    private authServ: AuthService,
    private bookServ: BookingService
  ) {}

  ionViewWillEnter(){
    this.checkToken();
  }

  checkToken(){
    if (localStorage.hasOwnProperty('token')) {
      const token = JSON.parse(localStorage.getItem('token'));
      if ( token === null || token === '') {
        this.router.navigateByUrl('/login');
  
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.authServ.logout();
  }

  clickSave() {
    const date = moment(this.res_date).format('MMMM DD YYYY');
    const time = moment(this.res_time).format('h:mm a');
    if(date === '' || time === '' || this.res_persons === '') {
      return alert('All fields are strickly required!');
    }
    this.bookServ.sendBooking(date, time, this.res_persons);
  }



}
