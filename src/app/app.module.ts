import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CompanyModule } from '../../projects/company/src/lib';

import { DemoMaterialModule } from './demo-module/demo-material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CompanyModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
