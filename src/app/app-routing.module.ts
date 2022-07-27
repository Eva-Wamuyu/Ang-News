import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotfounfComponent } from './components/notfounf/notfounf.component';
const routes: Routes = [
  { path: '',   redirectTo: 'categories', pathMatch: 'full' },
  {path: 'categories', component: CategoriesComponent},
  {path: 'articles/:source', component: ArticlesComponent},
  {path: '**', component: NotfounfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
