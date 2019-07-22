import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultPageComponent } from './Albums-info/result-page/result-page.component';
import { HomeComponent } from './home/home/home.component';
import { DetailedPageComponent } from './Albums-info/detailed-page/detailed-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Albums-info/result-page', component: ResultPageComponent },
  { path: 'albumname/:id', component: DetailedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
