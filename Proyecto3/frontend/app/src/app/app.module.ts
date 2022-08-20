import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Angular material

//my services
import { ScriptsService } from './services/scripts.service';

//my components
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { NavbarComponent } from './templates/partials/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { TaskComponent } from './task/task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupsComponent } from './groups/groups.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { TaskGroupComponent } from './templates/partials/task-group/task-group.component';
import { TaskElementComponent } from './templates/partials/task-element/task-element.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { GroupElementComponent } from './groups/group-element/group-element.component';


//-------------------------

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,

    //routes
    ErrorComponent,
    TaskComponent,
    GroupsComponent,
    ChatsComponent,
    SettingsComponent,
    TaskGroupComponent,
    TaskElementComponent,
    TaskAddComponent,
    GroupElementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
