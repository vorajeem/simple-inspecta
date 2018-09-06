import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {IqlService} from './iql.service';

import { AppComponent } from './app.component';
import { OutputAreaComponent } from './output-area/output-area.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
