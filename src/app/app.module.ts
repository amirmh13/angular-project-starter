import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './interceptors/app.interceptor';
import { AppEffects } from './store/app.effects';
import { APP_REDUCERS } from './store/app.reducers';


const APP_EFFECTS = [
  AppEffects
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(APP_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 5, logOnly: environment.production }),
    EffectsModule.forRoot(APP_EFFECTS)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
