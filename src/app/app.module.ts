import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {IqlService} from './iql.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
