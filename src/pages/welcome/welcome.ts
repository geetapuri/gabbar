/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 import { Observable } from 'rxjs';

import { AttendancePage } from '../../pages/attendance/attendance';
import { FeesPage } from '../../pages/fees/fees';
import { KidsPage } from '../../pages/kids/kids';
import { PerformancePage } from '../../pages/performance/performance';
import { EventsPage } from '../../pages/events/events';
import { ManageClassesPage } from '../../pages/manage-classes/manage-classes';
import { ClassesPage} from '../../pages/classes/classes';
import { GroupsPage} from '../../pages/groups/groups';
//import { Progress2Page} from '../../pages/progress2/progress2';
import { ShowClassInfoKidPage} from '../../pages/show-class-info-kid/show-class-info-kid';
import { SchedulePage } from '../../pages/schedule/schedule';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit{
  ngOnInit(){
    console.log("will call get parentID");
    this.springData.getParentID(this.user).subscribe(
      data => {
        console.log("in subscribe to data of getParentID");

        this.parent= data.parent;
        this.parentAvatar= data.parent[0].parentAvatar;
        this.parentName= data.parent[0].parentName;
        console.log("parent avatar received as: " + data.parent[0].parentAvatar);
        console.log("parent = " + this.parent[0].parentID);
        console.log("now get kids list");
        this.getKidsListForToday();
      },
      err => console.error(err),
      () =>
        console.log('getParentID   completed'),
    );



  }



  public user;
  public parent;
  public kidList;
  public avatar_src="assets/imgs/geeta.jpg";
  public parentAvatar;
  public myDate = new Date();
  public dateToSend;
  public parentName;


  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    this.parent= navParams.get('parent');
    console.log('received on welcome page, username = ' + this.user);
  }


  goToSchedule(){

    this.navCtrl.push(SchedulePage, {parent:this.parent});
  }
  goToAttendance(){

    this.navCtrl.push(AttendancePage, {parent:this.parent, role:this.user});

  }
  goToFees(){
    console.log("calling  FeeComponent");

    this.navCtrl.push(FeesPage, {parent:this.parent, role:this.user});
  }
  getKids(){
    console.log("in kids");
    this.navCtrl.push(KidsPage, {parent:this.parent, role:this.user});
  }

  goToManageGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsPage);
  }
  goToPerformance(){
    console.log("in performance");
    this.navCtrl.push(PerformancePage);
  }
  goToEvents(){
    console.log("in events");
    //this.navCtrl.push(EventsComponent);
  }
  /*goToProgress(){
    console.log("in progress");
    this.navCtrl.push(Progress2Component);
  }*/

  getKidsList(){
    //get all the kids list from DB first
    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {


        this.kidList= data.kidList;


      },
      err => console.error(err),
      () => console.log('getKidsList   completed')
    );


  }

  getKidsListForToday(){
    console.log("getKidsListForToday");
    //get all the kids list from DB first
    this.dateToSend= this.myDate.toISOString().split("T")[0];
    this.springData.getKidInfoParentToday(this.parent,this.dateToSend).subscribe(
      data => {


        this.kidList= data.Schedule;


      },
      err => console.error(err),
      () => console.log('getKidsListForToday   completed')
    );


  }



  goToGroups(){
    console.log(" groups");
    this.navCtrl.push(GroupsPage, {parent:this.parent, role:this.user});
  }




}
