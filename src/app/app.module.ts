import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNoutFoundComponentComponent } from './page-nout-found-component/page-nout-found-component.component';
import { ArticlesModule } from './articles/articles.module';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    PageNoutFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ArticlesModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
