import { ArticlesComponent } from './articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  { path:'articles',component:ArticlesComponent, data:{ animation:'articles'}},
  { path:'article/:id',component:ArticleDetailsComponent, data:{animation:'articles'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
