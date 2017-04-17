import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';

import { routing } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AsideComponent } from './aside/aside.component';

import {GetDataService} from './getdata.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    PageHeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    routing
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
