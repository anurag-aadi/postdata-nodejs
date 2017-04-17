import { Injectable, OnInit, OnDestroy, Component } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Observable} from 'rxjs/Rx';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class GetDataService {

  apiURL = 'http://localhost:3000/api/';
  id: string[];

  getPage(): string[] {
    return ['abc', 'xyz'];
  };
//constructor(private _jsonp: Jsonp) {}
constructor(private http: Http, private activatedRoute: ActivatedRoute, private router: Router) {

    this.id = activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }


ngOnInit() {
  
}

  getPagesAPI(): Observable<any[]> {
    return this.http.get(this.apiURL)
             .map( (res: Response) => res.json() )
             .catch( (error: any) => Observable.throw(error.json().error || 'Server Error' ) );
  };

  getData() {
    return  this.http.get(this.apiURL + 'article')
        .map((response: Response) => response.json());
  }


  getDatapageWise() {
    return  this.http.get(this.apiURL + 'article/' + this.id)
        .map((response: Response) => response.json());
  }

  createStock() {
  
    //var data = JSON.stringify({page_title: 'test', page_detail: 'test2'});

    var data = JSON.stringify({page_title: 'test', page_detail: 'test2'});
    //var data1 = JSON.stringify({page_detail: "details"});
   let data1 = JSON.stringify({page_detail: "details"});
    console.log(data1);
    var headers = new Headers();
        //headers.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
       // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
       // headers.append('Content-Type', 'application/JSON');

        this.http.post('http://localhost:3000/api/editor', data1, {headers: headers})
        .map((res) => res.json() )
        .subscribe(
          (response) => { console.log('Success Response', response)},
          (error) => { console.log('Error happened', error)},
        //() => { self.parseResponse(res); }
        );
}











 /* var to_send = JSON.stringify({'test': 'test'});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let self = this;
 this.http
    .post('http://localhost:3000/api/schoolmgm', 
      to_send, {
        headers: headers
      })
    .map((res) => res.json() )
    .subscribe(
      (response) => { console.log("Success Response",response)},
      (error) => { console.log("Error happened",error)},
      () => { self.parseResponse(res); }
    );
    
    
          res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");



    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.append('Content-Type', 'application/json');
    
    */



}
