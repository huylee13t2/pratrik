import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/app.component';
import { AdminComponent } from './admin/app.component';

// auth
import { SignupComponent } from './auth/signup/app.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    // { 
    //     path: 'signup', 
    //     component: SignupComponent,
    // },
    // { 
    //     path: 'login', 
    //     component: LoginComponent,
    // },
    
    { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
