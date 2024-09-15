import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScossMatModule } from './common/mat/mat.module';
import { ScossCommonModule } from './common/common.module';
import {
  HomeComponent, ServiceComponent, EventsComponent,
  GalleryComponent, ContactComponent, AboutComponent
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScossMatModule,
    ScossCommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
