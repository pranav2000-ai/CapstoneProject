import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { AtmPinChangeComponent } from './user-portal/atm-pin-change/atm-pin-change.component';
import { CheckBalanceComponent } from './user-portal/check-balance/check-balance.component';
import { FundTransferComponent } from './user-portal/fund-transfer/fund-transfer.component';
import { LogoutComponent } from './user-portal/logout/logout.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import {LoginComponent} from './login/login.component'
const routes: Routes=[
    
    {path:'Register',component:RegisterComponent},
    {path:'Login',component:UserPortalComponent},
    {path:'Login/Check-Balance',component:CheckBalanceComponent},
    {path:'Login/ATM',component:AtmPinChangeComponent},
    {path:'Login/Fund-Transfer',component:FundTransferComponent},
    {path:'Login/LogOut',component:LogoutComponent},
    {path:'Login/LogOut/SignOut',component:LoginComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}