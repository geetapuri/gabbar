

import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { PayFeesPage} from '../pay-fees/pay-fees';
import { WelcomePage } from '../welcome/welcome';


/**
 * Generated class for the FeesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-fees',
  templateUrl: 'fees.html',
})
export class FeesPage implements OnInit{
  ngOnInit (){
    console.log("calling getKids");
    this.getKids();
  }




  text: string;
  public selectedKid;
  public feeList;
  public kidsList;
  public parent;
  public avatar_src;
  public parentAvatar;
  public user;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams ) {
    console.log('Hello FeesComponent Page');
    this.text = 'Hello World';
    this.parent = this.navParams.get('parent');
    this.user= this.navParams.get('role');
  }



  getKids(){
    console.log("in getKids");
    this.springData.getKidsFeeParent(this.parent).subscribe(
      data => {

        this.kidsList= data.kidsList;
        //this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getKidsFeeParent completed')
    );

  }

  public onItemSelection(selection){
    let item=this.selectedKid;
    if (selection!=undefined){
      console.log("item selected: "+item.kidName );

    }
  }

getFeesForKid(item){
  this.navCtrl.push(PayFeesPage, {item:item, parent:this.parent, role:this.user});

}




goBackHome(){
  console.log("going back to home page");
  this.navCtrl.push(WelcomePage, {parent:this.parent, role:this.user});
}



}

