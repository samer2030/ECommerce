import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "../Components/footerComp/footer.component";
import { ProdDetailsComponent } from "../Components/prod-details/prod-details.component";
import { MainComponent } from "../Components/mainComp/main.component";
import { NotFoundComponent } from "../Components/not-found-comp/not-found-comp.component";
import { UserLayoutComponent } from "../Components/user-layout/user-layout.component";
import { LoginComponent } from "../Components/login/login.component";
import { RegisterComponent } from "../Components/register/register.component";
import { CartComponent } from "../Components/cart/cart.component";

let routes: Routes = [
  { path: '', redirectTo: "user", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user', component: UserLayoutComponent, children: [
      { path: '', redirectTo: "main", pathMatch: "full" },
      { path: 'main', component: MainComponent },
      { path: 'cart', component: CartComponent },
      { path: 'details/:id', component: ProdDetailsComponent }
    ]
  },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}