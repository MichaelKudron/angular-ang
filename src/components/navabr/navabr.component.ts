import { Component } from '@angular/core';
import { NavbarmenuComponent } from '../navbarmenu/navbarmenu.component';
import {  RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navabr',
  standalone: true,
  imports: [NavbarmenuComponent,RouterModule,RouterLinkActive],
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})
export class NavabrComponent {

}
