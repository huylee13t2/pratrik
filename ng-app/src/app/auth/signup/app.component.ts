import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'auth-singup',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class SignupComponent implements OnInit {
	user : any = {

	};
	loading = false;

	constructor(
		private router: Router,
		) { }

	signup() {
		console.log('register...........')
		console.log(this.user)
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
