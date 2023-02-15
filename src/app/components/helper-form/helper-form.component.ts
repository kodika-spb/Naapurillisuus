import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperFormService } from '../../services/helper-form.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css']
})
export class HelperFormComponent {

  form: any;
  signupForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router, public helperformService: HelperFormService){
    this.firebaseErrorMessage = '';
  }

  ngOnInit():void{
    this.signupForm = new FormGroup({
      'firstName': new FormControl ('', Validators.required),
      'lastName': new FormControl ('', Validators.required),
      'email': new FormControl ('', [Validators.required, Validators.email]),
      'password': new FormControl ('', Validators.required)
    });
  }

  signup(){
    if(this.signupForm.invalid)
      return;

      this.authService.signupUser(this.signupForm.value).then((result) => {
        if(result == null)
          this.router.navigate(['/helper-dashboard']);
        else if(result.isValid = false)
          this.firebaseErrorMessage = result.message;
      }).catch(() => {

      });
  }

}
