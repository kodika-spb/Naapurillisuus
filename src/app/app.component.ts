import { Component } from '@angular/core';
import { HelperFormService } from './services/helper-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Naapurillisuus';

  constructor(
    public helperformService: HelperFormService,
    ){}
}
