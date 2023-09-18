import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { NgxStoreModule } from 'ngx-store';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot(),
    FormsModule,

    NgxStoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
