import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MycoinComponent } from './components/mycoin/mycoin.component';
import { FormsModule } from '@angular/forms';
import { GetphotoService } from './services/getphoto.service';
import { GetgraphService } from './services/getgraph.service';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
const appRoutes:Routes = [
  {path: "",component:UserComponent},
  {path: "about",component:AboutusComponent},
  {path: "coin",component:MycoinComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    MycoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    GetphotoService,
    GetgraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
