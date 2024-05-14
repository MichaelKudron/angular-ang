import { Component, booleanAttribute } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NavabrComponent } from '../components/navabr/navabr.component';
import { NgIf } from '@angular/common';
import { MenuComponent } from '../components/menu/menu.component';
import { NavbarmenuComponent } from '../components/navbarmenu/navbarmenu.component';
import { MenuhandlingdataService } from './menuhandlingdata.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavabrComponent,NgIf,MenuComponent,NavbarmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private  menuhandlingdataServic:MenuhandlingdataService){}
  isClicked=false;
  ngOnInit():void{
    this.menuhandlingdataServic.isMenuClicked$.subscribe(value=>{this.isClicked=value})
  }
  title = 'angProj';

}
