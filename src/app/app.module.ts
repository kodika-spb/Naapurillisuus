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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { HelpersTasksComponent } from './components/helpers-tasks/helpers-tasks.component';
import { HelperDoneComponent } from './components/helper-done/helper-done.component';
import { HelperMyAccountComponent } from './components/helper-my-account/helper-my-account.component';
import { ClientMyTasksComponent } from './components/client-my-tasks/client-my-tasks.component';
import { ClientDoneComponent } from './components/client-done/client-done.component';
import { TabPanelClientComponent } from './components/tab-panel-client/tab-panel-client.component';
import { ClientTaskFormComponent } from './components/client-task-form/client-task-form.component';

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
    TabPanelComponent,
    HelpersTasksComponent,
    HelperDoneComponent,
    HelperMyAccountComponent,
    ClientMyTasksComponent,
    ClientDoneComponent,
    TabPanelClientComponent,
    ClientTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
