import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './core/http-interceptors/error-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ToasterModule } from 'angular2-toaster';
import { AuthGuard } from './core/auth-guard/auth-guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ToasterModule.forRoot(),

    ],
    declarations: [AppComponent],
    providers: [AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
