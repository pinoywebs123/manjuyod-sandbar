import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private authServ: AuthService,
    private menu: MenuController,
  ) { }

  private username: string;
  private password: string;

  ngOnInit() {
    this.menu.swipeGesture(false);
  }

  signUp() {
    this.router.navigateByUrl('/signup');
  }

  signIn() {
    this.authServ.login(this.username, this.password);
  }

}
