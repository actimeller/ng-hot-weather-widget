import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';

import {HotelsService} from './hotels.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WeatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [{provide: 'hotelsService', useClass: HotelsService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
