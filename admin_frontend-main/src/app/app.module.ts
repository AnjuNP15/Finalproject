import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './sections/users/users.component';
import { PostComponent } from './sections/post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { UserComponent } from './sections/user/user.component';
import { CreatepostComponent } from './sections/createpost/createpost.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    UsersComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
