import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './router/router.module';
import { ProductService } from './Services/product.service';
import { DefaultImgURLPipe } from './Pipes/DefaultImgURL/default-img-url.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/headerComp/header.component';
import { FooterComponent } from './Components/footerComp/footer.component';
import { MainComponent } from './Components/mainComp/main.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NavBarCompComponent } from './Components/nav-bar-comp/nav-bar-comp.component';
import { NotFoundComponent } from './Components/not-found-comp/not-found-comp.component';
import { ProdDetailsComponent } from './Components/prod-details/prod-details.component';
import { UserLayoutComponent } from './Components/user-layout/user-layout.component';
import { ProductComponent } from './Components/product/product.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductListComponent,
    DefaultImgURLPipe,
    NavBarCompComponent,
    NotFoundComponent,
    ProdDetailsComponent,
    UserLayoutComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
