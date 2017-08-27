import { Component } from '@angular/core';
import { Router } from '@angular/router';

// service
import { MainService } from '../../app.services';

@Component({
	selector: 'app-login',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class LoginComponent {
	user : any = {

	}

	constructor(
		private router: Router,
		private _main: MainService,
	){ 

	}

	login(){
		console.log('login')

		this._main.login(this.user).then(res => {
			console.log(res)
			if(res.result > 0){
				let data = res.data;
				localStorage.setItem('token', data.token);
				localStorage.setItem('user', JSON.stringify({'username' : data.username, 'email' : data.email, 'avatar' : data.avatar, 'isAdmin' : data.isAdmin }));
				this.router.navigate(['/']);
				window.location.reload();
			}
		});
	}

}
