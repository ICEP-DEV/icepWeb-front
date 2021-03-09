import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { MessagesComponent } from './messages/messages.component';
import { ApplyComponent } from './apply/apply.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { PostVacanciesComponent } from './post-vacancies/post-vacancies.component';


const routes: Routes = [
  { path: '',
redirectTo: '/create-profile' ,
pathMatch: 'full'},
{
  path: 'create-profile',
  component: CreateProfileComponent

},
{
  path:'dashboard',
  component: DashboardComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'status',
  component:StatusComponent
},
{
  path:'messages',
  component:MessagesComponent
},
{
  path:'apply',
  component:ApplyComponent
},
{
  path:'profile',
  component: ProfileComponent
},
{
  path:'admin',
  component: AdminComponent
},
{
  path:'view-applications',
  component: ViewApplicationsComponent
},
{
  path:'view-profiles',
  component: ViewProfilesComponent
},
{
  path:'post-vacancies',
  component: PostVacanciesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }