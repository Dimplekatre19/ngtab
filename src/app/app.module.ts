import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { TabForComponent } from './shared/component/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/component/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabForComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
