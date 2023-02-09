import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperFormService {
  isVisible$ = new BehaviorSubject<boolean>(true);
  
  open() {
    this.isVisible$.next(true);
    console.log('click');
  }
  close() {
    this.isVisible$.next(false);
  }
}
