import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { ErrorComponent } from './error/error.component';
import { TaskComponent } from './task/task.component';
import { GroupsComponent } from './groups/groups.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskAddComponent } from './task/task-add/task-add.component';

const routes: Routes = [
  { path: '', component:  TaskComponent},
  { path: 'tasks', component:  TaskComponent},
  { path: 'tasks/add', component:  TaskAddComponent},
  { path: 'groups', component:  GroupsComponent},
  { path: 'chats', component:  ChatsComponent},
  { path: 'settings', component:  SettingsComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
