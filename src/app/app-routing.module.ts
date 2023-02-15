import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { HelperFormComponent } from './components/helper-form/helper-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientTasksComponent } from './components/client-tasks/client-tasks.component';
import { HelperDashboardComponent } from './components/helper-dashboard/helper-dashboard.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'helper-form', component: HelperFormComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'client-form', component: ClientFormComponent},
  { path: 'client-tasks', component: ClientTasksComponent, canActivate: [AuthGuard]},
  { path: 'helper-dashboard', component: HelperDashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
