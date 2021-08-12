import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FinanceComponent } from './finance/finance.component';
import { PurchasesComponent } from './purchases/purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    FinanceComponent,
    PurchasesComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
