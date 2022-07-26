import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SourcesComponent } from './components/sources/sources.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfounfComponent } from './components/notfounf/notfounf.component';

import { TruncatePipe } from './Pipes_and_directives/truncate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SourcesComponent,
    ArticlesComponent,
    CategoriesComponent,
    NotfounfComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
