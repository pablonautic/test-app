import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
