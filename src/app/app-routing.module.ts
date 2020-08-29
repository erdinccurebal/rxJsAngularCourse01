import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { AComponent } from './components/pages/a/a.component';
import { BComponent } from './components/pages/b/b.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: 'pages', redirectTo: '404', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: '404', component: NotFoundComponent},
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent },
    ],
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
