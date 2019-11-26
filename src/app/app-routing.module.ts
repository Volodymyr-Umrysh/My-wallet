import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { BalanceComponent } from './balance/balance.component'
import { AboutComponent } from './about/about.component'
import { UsersComponent } from './users/users.component'


const routes: Routes = [
{path:'', component: BalanceComponent},
{path:'about', component: AboutComponent},
{path:'users', component: UsersComponent},

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {

}