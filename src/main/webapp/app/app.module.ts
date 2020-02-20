import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestJenkinsSharedModule } from 'app/shared/shared.module';
import { TestJenkinsCoreModule } from 'app/core/core.module';
import { TestJenkinsAppRoutingModule } from './app-routing.module';
import { TestJenkinsHomeModule } from './home/home.module';
import { TestJenkinsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestJenkinsSharedModule,
    TestJenkinsCoreModule,
    TestJenkinsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestJenkinsEntityModule,
    TestJenkinsAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TestJenkinsAppModule {}
