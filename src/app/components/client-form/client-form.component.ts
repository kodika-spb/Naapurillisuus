import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  signUpForm: FormGroup;
  firebaseErrorMessage: string;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
      'address': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'zip': new FormControl('', [Validators.required]),
    });
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched()
    }
  }
}
