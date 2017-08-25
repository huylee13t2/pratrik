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

	showdata = false;
	listData = [];


	constructor(
		private _main: MainService,
	){

	}

	ngOnInit() : void{
		
	}

	search(){
		console.log('search')
		console.log(this.enquire)
		this._main.search(this.enquire).then(res =>{
			console.log(res)
			if(res.result > 0){
				this.showdata = true;
				this.listData = res.data;
			}
		});
	}


}
