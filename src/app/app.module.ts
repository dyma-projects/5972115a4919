import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { LiaisonsComponent } from './liaisons/liaisons.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    LiaisonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
