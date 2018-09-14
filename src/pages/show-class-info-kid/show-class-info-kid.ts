
import { Component } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { KidsPage } from '../kids/kids';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the EditKidComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-show-class-info-kid',
  templateUrl: 'show-class-info-kid.html',
})
export class ShowClassInfoKidPage {

  text: string;
  public kid;
  public selectedGroup;
  public groupList;
  public myDate = new Date();
  public result;
   public parent;
   public user;
   public selectedDate;
   public scheduleForDate;
   public dateToSend;
   public monthNum;

   date: any = new Date();
daysInThisMonth: any;
daysInLastMonth: any;
daysInNextMonth: any;
//monthNames: string[];
//currentMonth: any;
public currentMonth;
currentYear: any;
currentDate: any;

monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/*monthNames[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";*/




  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController,public navParams: NavParams  ) {
    console.log('Hello ShowClassInfoKid Component');
    this.text = 'Hello World';

    this.kid= this.navParams.get('selectedKid');
    this.parent = this.navParams.get('parent');
    this.user= this.navParams.get('role');
    //this.selectedGroup.groupID= this.kid.groupID;
    let groupName = this.kid.groupName;
    let kidName = this.kid.kidName;
    console.log("kidName = " + kidName);
    //get groups - removing this option of editing groups for parents
    /*this.springData.getGroups(this.myDate).subscribe(
      data => {

        this.groupList= data.groupList;
        this.selectedGroup= data.groupList[0];

      },
      err => console.error(err),
      () => console.log('getKids completed')
    );*/
    console.log("calling getCurrMonthYear");
    this.getCurrentMonthYear();

    console.log("getting schedule for today");
    this.dateToSend = this.myDate.toISOString().split("T")[0];
    this.springData.getSchedule(this.dateToSend, this.kid.kidID).subscribe(
      data => {

        this.scheduleForDate=data.returnSchedule;
        console.log("schedule for date list has come as: " +
          data.returnSchedule);
        //console.log("data received = " + this.scheduleForDate[0].time);
        //this.navCtrl.push(KidsComponent, {parent:this.parent});

      },
      err => console.error(err),
      () => console.log('getScheduleForDate completed')

    );

  }

  public onItemSelection(selection){
    let item=this.selectedGroup;
    if (selection!=undefined){
      console.log("item selected: "+item.groupName );

    }
  }

  saveKidInfo(){
    //console.log("save kid info, selectedGroup ID = " + this.selectedGroup.groupID);

    this.springData.updateKid(this.kid).subscribe(
      data => {

        this.result=data.result;
        this.navCtrl.push(KidsPage, {parent:this.parent});

      },
      err => console.error(err),
      () => console.log('saveKidInfo completed')

    );
  }

  getDaysOfMonth() {
    console.log("getDaysOfMonth");
    console.log("month = " + this.date.getDay());

    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    console.log("month name  " + this.currentMonth);

    if(this.date.getMonth() === new Date().getMonth()) {
      console.log("here 1");
      this.currentDate = new Date().getDate();
    } else {
      console.log("here 2");
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      console.log("here**");
      for(i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }

  getCurrentMonthYear(){
    console.log("getCurrentMonthYear");
    this.date=new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    this.getDaysOfMonth();

  }

  goToLastMonth() {
    console.log("goToLastMonth");
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    console.log("in goToNextMonth");
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  clearHighlightedDate() {
    //implement to clear dates
      for (let index = 1; index < 32; index++) {
        try {
          var withSpan = document.getElementById("col-"+index).innerHTML;
          //console.log("1 withspan index " + withSpan);
          if(withSpan.startsWith('<span')) {
            console.log("withspan index " + withSpan.indexOf("selectedDate\">"));

            withSpan = withSpan.substring(withSpan.indexOf("selectedDate\">")+14,withSpan.indexOf("</span>"));
            //withSpan = withSpan.substring(withSpan.indexOf("</span>"), withSpan.length);
            console.log("withspan cleared " + withSpan);
            document.getElementById("col-"+index).innerHTML = withSpan;
          }
        } catch (error) {
          console.log("error in clearHighlightedDate "+ error);

        }


      }
  }

  clickedDate(day) {
    console.log("clicked date = " + day + this.currentMonth + this.currentYear);
    console.log("this.date  = " + this.date);
    console.log("get element by id for col id = " + document.getElementById("col-"+day).innerHTML );
    var toSpan = document.getElementById("col-"+day).innerHTML;
    this.clearHighlightedDate();
     toSpan = "<span class='selectedDate'>"+toSpan + "</span>";
     document.getElementById("col-"+day).innerHTML = toSpan;
    this.monthNum = this.date.getMonth() + 1;
    this.selectedDate = this.currentYear + "-" + this.monthNum + "-" + day;
    console.log("selected date = " + this.selectedDate);
    //this.dateToSend = new Date(this.selectedDate).toISOString();
    //this.dateToSend = '2018-7-5';

    this.springData.getSchedule(this.selectedDate, this.kid.kidID).subscribe(
      data => {

        this.scheduleForDate=data.returnSchedule;
        console.log("schedule for date list has come as: " +
          data.returnSchedule);

        //console.log("data received = " + this.scheduleForDate[0].time);
        //this.navCtrl.push(KidsComponent, {parent:this.parent});

      },
      err => console.error(err),
      () => console.log('getScheduleForDate completed')

    );
  }

  goBackHome(){
    console.log("going back to home page");
    this.navCtrl.push(WelcomePage, {parent:this.parent, role:this.user});
  }

}
