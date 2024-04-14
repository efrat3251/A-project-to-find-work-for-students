import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './componenta/user/user.component';
import { formComponent } from './componenta/form/form.component';
import { BusinessComponent } from './componenta/business/business.component';
import { UserPropertyComponent } from './componenta/user-property/user-property.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    formComponent,
    BusinessComponent,
    UserPropertyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
