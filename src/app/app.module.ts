import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ThemeModule } from "./theme/theme.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ThemeModule,
    CoreModule,
    PagesModule,
    SharedModule,
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
