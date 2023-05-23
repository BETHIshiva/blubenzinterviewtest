import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';
import { FormsModule } from '@angular/forms';
import { studentservice } from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    ThirdcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [studentservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
