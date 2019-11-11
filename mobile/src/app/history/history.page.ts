import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  private bookings: any;
  constructor(
    private bookServ: BookingService
  ) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.bookServ.getBooking().subscribe((data) => {
      console.log(data);
      this.bookings = data;
    });
  }

}
