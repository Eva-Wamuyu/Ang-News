import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfounfComponent } from './components/notfounf/notfounf.component';

import { TruncatePipe } from './Pipes_and_directives/truncate.pipe';
import { GoBackDirective } from './Pipes_and_directives/goBack.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticlesComponent,
    CategoriesComponent,
    NotfounfComponent,
    TruncatePipe,
    GoBackDirective
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
