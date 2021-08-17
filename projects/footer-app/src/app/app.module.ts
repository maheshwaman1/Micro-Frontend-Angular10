import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector:Injector){

  }

  ngDoBootstrap(){
    const headerApp =createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('header-app',headerApp);
  }
 }
