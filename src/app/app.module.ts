import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { NavComponent } from './components/nav/nav.component';
import {EmployeeService} from '../app/shared/employee.service';
import {FormsModule} from '@angular/forms';
//import { FilterPipe } from './filter.pipe';

//import { FilterPipeModule } from 'ngx-filter-pipe';

const appRoutes : Routes=[
  {path:'' , component:ViewComponent , pathMatch: 'full'},
  {path:'view',component:ViewComponent},
  {path:'create' , component:CreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
