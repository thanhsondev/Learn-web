import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavBarComponent } from './workspace/left-nav-bar/left-nav-bar.component';
import { MainComponent } from './workspace/main/main.component';
import { TopNavBarComponent } from './workspace/top-nav-bar/top-nav-bar.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    MainComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
