import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockService } from './services/stock.service';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import {AppRoutesModule } from './app-routes/app-routes.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutesModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, StockItemComponent, CreateStockComponent, StockListComponent, LoginComponent, RegisterComponent, StockDetailsComponent ],
  providers: [StockService, MessageService, UserService, UserStoreService, {
      provide: HTTP_INTERCEPTORS,
      useClass: StockAppInterceptor,
      multi: true,
    }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
