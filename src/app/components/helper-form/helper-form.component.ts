import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperFormService } from '../../services/helper-form.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css']
})
export class HelperFormComponent {

  form: any;

  constructor(public helperformService: HelperFormService){}

}
