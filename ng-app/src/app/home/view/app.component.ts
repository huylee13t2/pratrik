import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// service
import { MainService } from '../../app.services';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class HomeViewComponent implements OnInit {

	data : any = {};

	constructor(
		private _main: MainService,
		private route: ActivatedRoute,
		private location: Location
	){

	}

	ngOnInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this._main.getView(+params.get('id')))
		.subscribe(data => {
			console.log(data)
			if(data.result > 0){
				this.data = data.data
			}
		});
	}

}
