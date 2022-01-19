import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TestmoduleModule } from './testmodule/testmodule.module';



import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { TestcomponentComponent } from './testmodule/testcomponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    TestmoduleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
