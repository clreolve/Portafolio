import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component'
import { AngularhomeComponent } from './angularhome/angularhome.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //mis rutas
  {path: 'home', component: HomeComponent},
  {path: 'task', component: TasksComponent},
  {path:'angularhome', component: AngularhomeComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: Error404Component}
  //{path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
