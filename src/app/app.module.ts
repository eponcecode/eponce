import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './components/material/material.module';
import { AboutComponent } from './pages/about/about.component';
import { PoemaComponent } from './components/poema/poema.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AgoniaComponent } from './pages/blog/agonia/agonia.component';
import { AngelComponent } from './pages/blog/angel/angel.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PatreonComponent } from './pages/patreon/patreon.component';
import { HttpClientModule } from '@angular/common/http';
import { DedicationsComponent } from './pages/dedications/dedications.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PoemaComponent,
    BlogComponent,
    AgoniaComponent,
    AngelComponent,
    PatreonComponent,
    DedicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbCollapseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
