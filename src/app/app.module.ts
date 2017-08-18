import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LinkComponent } from './link/link.component';
import { RouterModule, Routes } from '@angular/router';
import { GooggenComponent } from './googgen/googgen.component';


const appRoutes: Routes = [
  {path:'', component: GooggenComponent}, 
  { path: 'page1', component: LinkComponent },
  { path: 'gogg', component: GooggenComponent },
];

@NgModule({
   imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    LinkComponent,
    GooggenComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
