import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SportsModule } from './sports/sports.module';
@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    SportsModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
