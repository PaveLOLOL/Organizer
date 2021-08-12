import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";
import {FinanceComponent} from "./finance/finance.component";
import {PurchasesComponent} from "./purchases/purchases.component";

// http://localhost:4200/ -> AppComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/service -> ServiceComponent
// http://localhost:4200/finance -> FinancialReportComponent

const routes: Routes = [
  {path:'', component: PurchasesComponent},
  {path:'about', component: AboutComponent},
  {path:'service', component: ServiceComponent},
  {path:'finance', component: FinanceComponent},
  // {path: 'posts/:id', component: PostComponent} //todo задел для постов (динамика)
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
