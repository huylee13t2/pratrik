import { Injectable } from '@angular/core';
import { Location }   from '@angular/common';
import { Http, Response, Headers, Request ,RequestOptions ,RequestMethod } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';


@Injectable()

export class MainService{
	private headers = new Headers({
		'Content-Type': 'application/json; charset=utf-8',
		"Access-Control-Allow-Origin":"*",
		'Access-Control-Allow-Headers': '*',
	});
	private url_http = 'http://localhost:8000/';
	// private url_http = 'http://localhost:8000/';

	constructor(private http : Http, location: Location,){
		// this.url_http = window.location.origin + '/';
		// console.log(this.url_http)
	}

	public search(data) : Promise<any>{
		console.log('service')
		let url = this.url_http + 'api/search';
		console.log(url)
		let fd = new FormData();
		fd.append('city', data.city);
		fd.append('locality', data.locality);
		fd.append('option', data.option);
		fd.append('fields', data.fields);

		return this.http.post(url, fd).toPromise().then(response => response.json()).catch(this.handleError);
	}

	public getView(id : number) : Promise<any>{
		console.log('get view')
		let url = `${this.url_http}api/list/view/${id}`;

		return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);
	}

	// buy product
	// buyProduct(id : number, record : number, user_id : number) : Promise<any> {
	// 	const url = this.url_http + 'shop/buy/';
	// 	let fd : FormData = new FormData();
	// 	fd.append('user_id', user_id);
	// 	fd.append('id', id);
	// 	fd.append('record', record);
	// 	return this.http.post(url, fd).toPromise().then(response => response.json()).catch(this.handleError);
	// }


	// user
	public signup(data) : Promise<any> {
		let url = this.url_http + 'api/signup';
		console.log(url)
		console.log(data)
		let fd = new FormData();
		fd.append('username', data.username);
		fd.append('password', data.password);
		fd.append('email', data.email);
		fd.append('city', data.city);
		fd.append('phone', data.phone_number);

		return this.http.post(url, fd).toPromise().then(response => response.json()).catch(this.handleError);
	}

	public login(data) : Promise<any> {
		console.log('====> login')
		let url = this.url_http + 'api/login';
		console.log(url)
		console.log(data)
		let fd = new FormData();
		fd.append('username', data.username);
		fd.append('password', data.password);

		return this.http.post(url, fd).toPromise().then(response => response.json()).catch(this.handleError);
	}


	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private jwt() {
		// create authorization header with jwt token
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			let headers = new Headers();
			headers.append( 'Authorization', 'Bearer' + currentUser.token );
			headers.append( 'aaaaaaaa', 'aaaaaaaaaaa' );

			let options =  new RequestOptions({ headers: headers });
			return options;
		}
	}

}