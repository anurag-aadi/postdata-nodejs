import { Component, OnInit } from '@angular/core';


import {GetDataService} from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService] 
})

/*export class AppComponent {
  title = 'app works test!';
  
}*/
export class AppComponent implements OnInit {

  title= 'this is test';

  pages: string[];

  ngOnInit() {
    this.getAllPages();
  }

  constructor (private getdataService: GetDataService) {

  }

  getAllPages(){
   // this.getdataService.getPagesAPI()
    this.getdataService.getData()
    .subscribe(
        data  => this.pages = data["data"],
        //data  => console.log(JSON.stringify(data["data"])) ,
        error => console.log('Server Error test')
        //error => console.log(JSON.stringify(error))
      );
  }


}


