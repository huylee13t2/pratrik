import { Component, OnInit } from '@angular/core';

import { MainService } from '../app.services';

@Component({
	selector: 'app-home',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit{
	enquire : any = {
		city : '',
		locality : '',
		option : '',
		fields : '',
	};

	check_login = false;
	showdata = false;
	listData = [];


	constructor(
		private _main: MainService,
	){
		let token = localStorage.getItem('token');
		console.log(token)
		if(token != null){
			this.check_login = true;
		}
	}

	ngOnInit() : void{
		
	}

	search(){
		console.log('search')
		console.log(this.enquire)

		localStorage.setItem(
			'keywork', 
			JSON.stringify({
				'city' : this.enquire.city, 
				'locality' : this.enquire.locality, 
				'option': this.enquire.option, 
				'fields' : this.enquire.fields
			})
		);

		this._main.search(this.enquire).then(res =>{
			console.log(res)
			if(res.result > 0){
				this.showdata = true;
				this.listData = res.data;
			}
		});
	}


}
