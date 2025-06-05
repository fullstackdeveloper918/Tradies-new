import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../../core/services/auth';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit, OnDestroy{
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  $subscription! : Subscription
  constructor(
  private fb: FormBuilder,
  private authService : Auth,
  private toastr : ToastrService,
  private router : Router) {
  }

  ngOnInit(){
    this.initializeForm()
  }
    ngOnDestroy() {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
    this.$subscription =   this.authService.login(this.loginForm.value).subscribe((res)=>{
          if (res.status === 200 && res.success) {
          this.router.navigate(['/dashboard'])
          this.toastr.success(res.message || 'Login successful');
        }
      })
    }
  }

  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      console.log('Sign Up:', this.signUpForm.value);
      // Add signup logic here
    }
  }


}
