import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// home
import { HomeComponent } from './home/app.component';
import { HomeListComponent } from './home/list/app.component';
import { HomeViewComponent } from './home/view/app.component';
import { AdminComponent } from './admin/app.component';

// auth
import { SignupComponent } from './auth/signup/app.component';
import { LoginComponent } from './auth/login/app.component';


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
    { 
        path: 'login', 
        component: LoginComponent,
    },
    { 
        path: 'list', 
        component: HomeListComponent,
    },
    { 
        path: 'list/view/:id', 
        component: HomeViewComponent,
    },
    
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
