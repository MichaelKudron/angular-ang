import { Component } from '@angular/core';
import { TeamServiceService } from '../../app/team-service.service';
import { CommonModule, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.css'
})
export class OurteamComponent {
teamNumber:number=1;
constructor(private TeamService:TeamServiceService){

}
ngOnInit(){
  this.TeamService.teamMember$.subscribe(value=>{this.teamNumber=value});
  console.log(this.teamNumber)
}
RightArrowHandle():void{
  this.TeamService.IncriseNumber();
}
LeftArrowHandle():void{
  this.TeamService.DecreseNumber();
}
ButtonHandle(value:number){
  this.TeamService.SetNumber(value);
}
}
