import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarshComponent } from 'src/app/harsh/harsh.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'harsh', component: HarshComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
