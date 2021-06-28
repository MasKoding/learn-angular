import { PageNoutFoundComponentComponent } from './page-nout-found-component/page-nout-found-component.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent},
  { path:'privacy',component:PrivacyComponent },
  { path:'',redirectTo:'/home',pathMatch:'full' },
  { path:'**',component:PageNoutFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
