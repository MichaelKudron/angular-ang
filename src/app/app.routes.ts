import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { OurteamComponent } from '../components/ourteam/ourteam.component';
import { ExpertsComponent } from '../components/experts/experts.component';
const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home Page'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'About'
    },
    {
        path:'ourteam',
        component:OurteamComponent,
        title:'Our Team'
    },
    {
        path:"experts",
        component:ExpertsComponent,
        title:"Experts"
    }
]
export default routes;