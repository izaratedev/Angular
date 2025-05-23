import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';

import { FormsModule } from '@angular/forms';
import { WinecellarAboutComponent } from './winecellar-about/winecellar-about.component';
import { WinecellarWinesComponent } from './winecellar-wines/winecellar-wines.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WinecellarAboutComponent,
    WinecellarWinesComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
