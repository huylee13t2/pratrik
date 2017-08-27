import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { MainService } from '../../app.services';

@Component({
	selector: 'app-home-list',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class HomeListComponent implements OnInit {
	check_login = false;
	keywork = {
		// city : '',
		// locality : '',
		// option : '',
		// fields : '',
	};
	listData = [];

	constructor(
		private _main: MainService,
		private router: Router,
	){
		let token = localStorage.getItem('token');
		console.log(token)
		if(token != null){
			this.check_login = true;
			this.keywork = JSON.parse(localStorage.getItem('keywork'));
			console.log(this.keywork);

			this.getList(this.keywork);
		} else{
			this.router.navigate(['/']);
		}
	}

	ngOnInit() : void{
		
	}

	getList(data):void{
		this._main.search(data).then(res =>{
			console.log(res)
			if(res.result > 0){
				this.listData = res.data;
			}
		});
	}

}
