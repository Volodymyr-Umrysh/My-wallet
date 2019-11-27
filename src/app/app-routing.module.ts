import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './about/about.component'
import { UsersComponent } from './users/users.component'
import { ListComponent } from './list/list.component'


const routes: Routes = [
{path:'', component: ListComponent},
{path:'about', component: AboutComponent},
{path:'users', component: UsersComponent},

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {

}