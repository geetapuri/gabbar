
import { Component , OnInit} from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
//import { EditKidComponent } from '../edit-kid/edit-kid';
import { AddKidPage } from '../add-kid/add-kid';

/**
 * Generated class for the KidsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-kids',
  templateUrl: 'kids.html',
})
export class KidsPage {
ngOnInit(){
  this.getKidsList();
}
  text: string;
  public kidList;
  public parent;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController,  public navParams: NavParams) {
    console.log('Hello KidsComponent Component');
    this.text = 'Hello World';
    this.parent = this.navParams.get('parent');
    console.log("in construct of KidsComponent, parentID = " + this.parent[0].parentID);
  }

  getKidsList(){
    //get all the kids list from DB first
    this.springData.getKidInfoParent(this.parent).subscribe(
      data => {


        this.kidList= data.kidList;

      },
      err => console.error(err),
      () => console.log('getKidsList completed')
    );


  }

  addKids(){
    console.log("add kid");
    this.navCtrl.push(AddKidPage, {parent:this.parent});

  }

  /*goToEditKidDetails(selectedKid) {
    console.log("edit kid");
    this.navCtrl.push(EditKidComponent, {selectedKid:selectedKid, parent:this.parent});
  }*/

}
