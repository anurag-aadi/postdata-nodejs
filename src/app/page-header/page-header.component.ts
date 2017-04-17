import { Component, OnInit } from '@angular/core';

import {GetDataService} from '../getdata.service';



@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  providers: [GetDataService] 
})

/*export class PageHeaderComponent implements OnInit {

  title= 'this is test';

  constructor() { };

  ngOnInit() {
  }

}*/


export class PageHeaderComponent implements OnInit {

  title= 'this is test';

  pages: string[];

  ngOnInit() {
    this.getAllPages();
  }

  constructor (private getdataService: GetDataService) {

  }

  getAllPages(){
   // this.getdataService.getPagesAPI()
    this.getdataService.getDatapageWise()
    .subscribe(
        data  => this.pages = data["data"],
        //data  => console.log(JSON.stringify(data["data"])) ,
        error => console.log('Server Error test')
        //error => console.log(JSON.stringify(error))
      );
  }


}

