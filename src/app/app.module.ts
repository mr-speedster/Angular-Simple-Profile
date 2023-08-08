import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactComponent } from './component/contact/contact.component';
import { SkillComponent } from './component/skill/skill.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    SkillComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
