import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css'],
})
export class HelperFormComponent {
  form: any;
  signupForm: FormGroup;
  firebaseErrorMessage: string;
  myAngularxQrCode: string;


  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.myAngularxQrCode = 'ItSoluionStuff.com';
    this.firebaseErrorMessage = '';
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });
   /*  if (this.authService.isLoggedIn()) {
      this.router.navigate(['helper-dashboard']);
    } */
  }

  signUp() {
    if (this.signupForm.invalid) return;

    this.authService
      .signupUser(this.signupForm.value)
      .then((result) => {
        if (result == null) {
          this.router.navigate(['helper-dashboard']);
        }
        return throwError(() =>  new Error('Faild login')); 
      })
      .catch(() => {});
  }
}
