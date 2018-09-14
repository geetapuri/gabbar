
import { Component , OnInit} from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { ShowClassInfoKidPage} from '../show-class-info-kid/show-class-info-kid';
import { WelcomePage } from '../welcome/welcome';


/**
 * Generated class for the GroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage implements OnInit{

    ngOnInit(){
        this.getKidList();
      }

  text: string;
  public groupList;
  myDate: String = new Date().toISOString();
  public parent;
  public user;
  public kidList;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello GroupsComponent Component');
    this.text = 'Hello World';
    this.parent= this.navParams.get('parent');
    this.user = this.navParams.get('role');


  }

  getGroupList(){
    //get all the kids list from DB first
    this.springData.getGroups(this.myDate).subscribe(
      data => {


        this.groupList= data.groupList;

      },
      err => console.error(err),
      () => console.log('getGroupList completed')
    );


  }



  goBackHome(){
    console.log("going back to home page");
    this.navCtrl.push(WelcomePage, {parent:this.parent, role:this.user});
  }

  getKidList(){
    console.log("getKidList");

    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {


        this.kidList= data.kidList;

      },
      err => console.error(err),
      () => console.log('getGroupList completed')
    );
  }

  goToShowKidClasses(selectedKid) {
    console.log("Show kid Classes, calling ShowClassInfoComponent now");
    this.navCtrl.push(ShowClassInfoKidPage, {selectedKid:selectedKid, parent:this.parent, role:this.user});
  }


}
