import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HarshComponent } from 'src/app/harsh/harsh.component';

@NgModule({
  declarations: [
    AppComponent,
    HarshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // Starting component
  bootstrap: [AppComponent]
})
export class AppModule { }
