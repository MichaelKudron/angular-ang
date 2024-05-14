import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { OurteamComponent } from '../components/ourteam/ourteam.component';
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
    }
]
export default routes;