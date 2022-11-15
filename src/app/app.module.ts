import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { CreateupdateComponent } from './component/createupdate/createupdate.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

import { CourseService } from './shared/course.service';
import { DataService } from './shared/data.service';
import { Course } from './course';




const appRoutes : Routes = [
  {path : 'angularMvcProject/get' , component : WelcomeComponent},
  {path : 'angularMvcProject/get/welcomeCourses' , component : WelcomeComponent},
  {path : 'angularMvcProject/get/viewAllCourses' , component : ListComponent},
  {path : 'angularMvcProject/get/addCourses' , component : CreateupdateComponent},
  {path : 'angularMvcProject/get/editCourses' , component : UpdateComponent},
  {path : 'angularMvcProject/get/removeCourses' , component : DeleteComponent},  
  {path : 'angularMvcProject/get/confirmCourses' , component : ConfirmComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateupdateComponent,
    NavbarComponent,
    ConfirmComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService,DataService,Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
