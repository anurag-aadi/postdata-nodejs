import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PageHeaderComponent} from '../../page-header/page-header.component';
import {AsideComponent} from '../../aside/aside.Component';

import {GetDataService} from '../../getdata.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [GetDataService] 
})


export class ArticleComponent implements OnInit {

  title: string[];

  pages: string[];

  ngOnInit() {
    this.getDatapageWise();

  }

  constructor (private getdataService: GetDataService) {

  }

  getDatapageWise(){
   // this.getdataService.getPagesAPI()
    this.getdataService.getDatapageWise()
    .subscribe(
        data  => this.pages = data["data"],
        //data  => console.log(JSON.stringify(data["data"])) ,
        error => console.log('Server Error test')
        //error => console.log(JSON.stringify(error))
      );

  }

  createStock() {
    this.getdataService.createStock();
  }

  

/*
createStock(schfacility: string, newlink: string) {
this.stockService.createStock(schfacility, newlink).subscribe;

}
*/

}
