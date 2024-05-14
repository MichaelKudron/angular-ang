import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuhandlingdataService {

  private isMenuClicked =new BehaviorSubject<boolean>(false);
  isMenuClicked$ = this.isMenuClicked.asObservable();
  changeMenuClicked(){
   
    this.isMenuClicked.next(!this.isMenuClicked.getValue())
  }
}
