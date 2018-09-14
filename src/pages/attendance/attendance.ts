

import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the AttendanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage implements OnInit{
  ngOnInit (){
    console.log("calling getKids");
    this.getKidList();
  }

  text: string;
  public kidList;
  public kidsList;

  public selectedKid;
  public attendanceList;
  public parent;
  public avatar_src;
  public parentAvatar;
  public groupName;
  public groupID;
  public user;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams ) {
    console.log('Hello AttendancePage');
    this.text = 'Hello World';
    this.parent= this.navParams.get('parent');
    this.user = this.navParams.get('role');


  }



  getKids(){
    console.log("in getKids");
    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {

        this.kidsList= data.kidList;
        //this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getKidInfoParent completed')
    );


  }
  public onItemSelection(selection){
    let item=this.selectedKid;
    if (selection!=undefined){
      console.log("item selected: "+item.kidName );

    }
  }



  getAttendanceForKid(item){
    this.selectedKid= item.kidName;
    this.springData.viewAttendanceForKid(item).subscribe(
      data => {


        this.attendanceList= data.attendance;

      },
      err => console.error(err),
      () => console.log('viewAttendanceKid completed')
    );
  }

getAttendanceForKidGroup(item){
    this.selectedKid= item.kidName;
    console.log("groupID = "+ item.groupID);
    this.groupName = item.groupName;
    this.springData.viewAttendanceForKidGroup(item).subscribe(
      data => {


        this.attendanceList= data.attendance;

      },
      err => console.error(err),
      () => console.log('viewAttendanceKidGroup completed')
    );
  }

  getKidList(){
    console.log("getKidList");

    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {


        this.kidList= data.kidList;

      },
      err => console.error(err),
      () => console.log('getKidList completed')
    );
  }

  /*goToShowDatesForClass(selectedGroup){
    console.log("goToShowClassAttendance");
    this.groupName=selectedGroup.groupName;
    this.groupID=selectedGroup.groupID;
    this.springData.getScheduleForGroup(this.parent,selectedGroup.groupID).subscribe(
      data => {

        this.scheduleList= data.Schedule;
       // this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getSchedule for Group completed')
    );


 }*/

 goBackHome(){
  console.log("going back to welcome page");
  this.navCtrl.push(WelcomePage, {parent:this.parent, role:this.user});
}


}

