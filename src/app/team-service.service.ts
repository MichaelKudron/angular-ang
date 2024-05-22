import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
    private teamMember = new BehaviorSubject<number>(1);
    teamMember$ = this.teamMember.asObservable();

    IncriseNumber(){
      this.teamMember.next(this.teamMember.getValue()+1);
      if(this.teamMember.getValue()>=3){
        this.teamMember.next(0);
      }
    }
    DecreseNumber(){
      this.teamMember.next(this.teamMember.getValue()-1);
      if(this.teamMember.getValue()<0){
        this.teamMember.next(2);
      }
    }
    SetNumber(value:number){
      this.teamMember.next(value);
    }
}
