import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/headerComp/header.component';
import { FooterComponent } from './Components/footerComp/footer.component';
import { MainComponent } from './Components/mainComp/main.component';
import { ProductComponent } from './Components/productComp/product.component';
import { FormsModule } from '@angular/forms';
import { DefaultImgURLPipe } from './Pipes/DefaultImgURL/default-img-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    DefaultImgURLPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
