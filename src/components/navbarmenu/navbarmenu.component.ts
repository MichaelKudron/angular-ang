import { Component, input,output,EventEmitter } from '@angular/core';
import { MenuhandlingdataService } from '../../app/menuhandlingdata.service';
@Component({
  selector: 'app-navbarmenu',
  standalone: true,
  imports: [],
  templateUrl: './navbarmenu.component.html',
  styleUrl: './navbarmenu.component.css'
})
export class NavbarmenuComponent {
  constructor(private  menuhandlingdataServic:MenuhandlingdataService){}
  
 HandleClick(){
  this.menuhandlingdataServic.changeMenuClicked();
 }
}
