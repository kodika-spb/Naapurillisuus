import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {


  form = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get title() {
    return this.form.controls.title as FormControl
  }
}
