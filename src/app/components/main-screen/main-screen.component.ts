import { Component} from '@angular/core';
import { HelperFormService } from '../../services/helper-form.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {

  constructor(public helperformService: HelperFormService){}
  imgUrl1 ='./assets/face.png';
  imgUrl2= './assets/messages.png';
  imgUrl3 = './assets/hands.png';

}
