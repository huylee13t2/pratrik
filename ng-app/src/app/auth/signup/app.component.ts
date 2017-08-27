import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { MainService } from '../../app.services';


@Component({
	selector: 'auth-singup',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class SignupComponent implements OnInit {
	user : any = {

	};

	constructor(
		private router: Router,
		private _main: MainService,
	){ 

	}

	signup() {
		console.log('register...........')
		console.log(this.user)

		this._main.signup(this.user).then(res => {
			console.log(res)
			if(res.result > 0){
				this.router.navigate(['/login']);
			}
		});

		// this.userService.create(this.model)
		// .subscribe(
		// 	data => {
		// 		this.alertService.success('Registration successful', true);
		// 		this.router.navigate(['/login']);
		// 	},
		// 	error => {
		// 		this.alertService.error(error);
		// 		this.loading = false;
		// 	});
	}

	ngOnInit(): void{
		
	}
	
}
