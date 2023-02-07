import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule} from '@angular/common/http';
import { HelperFormComponent } from './helper-form/helper-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HelperDashboardComponent } from './helper-dashboard/helper-dashboard.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component'

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
    MyTasksComponent 
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
