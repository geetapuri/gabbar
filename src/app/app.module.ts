import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpRequest, HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GetDataFromSpringProvider } from '../providers/get-data-from-spring/get-data-from-spring';
import { WelcomePage } from '../pages/welcome/welcome';
import { AttendancePage } from '../pages/attendance/attendance';
import { ManageClassesPage } from '../pages/manage-classes/manage-classes';
import { ClassesPage } from '../pages/classes/classes';
import { GroupsPage } from '../pages/groups/groups';
import { ShowClassInfoKidPage } from '../pages/show-class-info-kid/show-class-info-kid';
import { SchedulePage } from '../pages/schedule/schedule';
import { FeesPage } from '../pages/fees/fees';
import { KidsPage } from '../pages/kids/kids';
import { PerformancePage } from '../pages/performance/performance';
import { EventsPage } from '../pages/events/events';
import { PayFeesPage } from '../pages/pay-fees/pay-fees';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    AttendancePage,
    FeesPage,
    KidsPage,
    PerformancePage,
    EventsPage,
    ManageClassesPage,
    ClassesPage,
    GroupsPage,
    ShowClassInfoKidPage,
    SchedulePage,
    PayFeesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    AttendancePage,
    FeesPage,
    KidsPage,
    PerformancePage,
    EventsPage,
    ManageClassesPage,
    ClassesPage,
    GroupsPage,
    ShowClassInfoKidPage,
    SchedulePage,
    PayFeesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    GetDataFromSpringProvider
  ]
})
export class AppModule {}
