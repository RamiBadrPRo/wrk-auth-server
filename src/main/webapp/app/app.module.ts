import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AuthSharedModule } from 'app/shared/shared.module';
import { AuthCoreModule } from 'app/core/core.module';
import { AuthAppRoutingModule } from './app-routing.module';
import { AuthHomeModule } from './home/home.module';
import { AuthEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AuthSharedModule,
    AuthCoreModule,
    AuthHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AuthEntityModule,
    AuthAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AuthAppModule {}
