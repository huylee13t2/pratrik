import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class MainComponent {
	check_login = false;
	isAdmin = false;
	user : any = {};
	
	constructor(
		// private _main: MainService,
		private router: Router,
	){
		console.log('1111111111')
		let token = localStorage.getItem('token');
		console.log(token)
		if(token != null){
			this.check_login = true;
			this.user = JSON.parse(localStorage.getItem('user'));
			this.isAdmin = this.user.isAdmin;
		}
	}

	ngOnInit() : void{
		console.log('2222222222')
		console.log(this.user)
		console.log(this.user.email)
	}

	logout() {
		localStorage.clear();
		this.router.navigate(['/']);
		window.location.reload();
	}
}
