import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private activated
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const credential = this.auth.loginWithEmail
    (this.formLogin.value);
    console.log(credential);
    this.navCtrl.navigateForward(this.acti)
    // return this.router.navigate(['/tabs/dashboard']);
  }
}
