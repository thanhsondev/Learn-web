import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
// Board page components
import { BoardPageComponent } from './board-page/board-page.component';
import { TopNavBarComponent } from './board-page/top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './board-page/left-nav-bar/left-nav-bar.component';
import { MainComponent } from './board-page/main/main.component';
// Workspace page components
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { WorkspaceLeftNavBarComponent } from './workspace-page/left-nav-bar/left-nav-bar.component';
import { WorkspaceMainComponent } from './workspace-page/main/main.component';
import { WorkspaceTopNavBarComponent } from './workspace-page/top-nav-bar/top-nav-bar.component';
// Workspace-main components
import { MainToolBarComponent } from './workspace-page/main/tool-bar/tool-bar.component';
import { MainCardComponent } from './workspace-page/main/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BoardPageComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    MainComponent,
    WorkspacePageComponent,
    WorkspaceLeftNavBarComponent,
    WorkspaceMainComponent,
    WorkspaceTopNavBarComponent,
    MainToolBarComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
