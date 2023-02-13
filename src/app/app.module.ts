import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule} from '@angular/common/http';
import { HelperFormComponent } from './components/helper-form/helper-form.component';
import { HelperDashboardComponent } from './components/helper-dashboard/helper-dashboard.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientTasksComponent } from './components/client-tasks/client-tasks.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    HelperFormComponent,
    SignInComponent,
    ContactFormComponent,
    HelperDashboardComponent,
    ContactFormComponent,
    ClientFormComponent,
    ClientTasksComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
