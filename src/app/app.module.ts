import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SetVidElementsComponent } from './set-vid-elements/set-vid-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    SetVidElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
