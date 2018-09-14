
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
/*
  Generated class for the GetDataFromSpringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetDataFromSpringProvider {

  authenticated = false;

  constructor(public http: Http) {
    console.log('Hello GetDataFromSpringProvider Provider');
  }

  authenticate(credentials) {

    console.log("in authenticate");

   /* let headers = new Headers(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});*/
    let headers = new Headers ();
    headers.append('Authorization' , 'Basic ' + btoa(credentials.username  + ':' + credentials.password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let options = new RequestOptions({ headers: headers });
    let body = {
      'test' : 'test'
    }


    //return this.http.post(`http://172.20.10.2:8080/resourceLogin`,body, {headers: headers})
    return this.http.post(`https://coachingapp-203705.appspot.com/resourceLogin`, body, { headers: headers })
    .map(data  => data.json());

  }

  getGroups(myDate){
    console.log("in getGroups");

      let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'test': `test`
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getGroups`, body, {headers: headers})
      .map(data => data.json());


  }

  getPackages(myDate){
    console.log("in getPackages");

      let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'test': `test`
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getPackages`, body, {headers: headers})
      .map(data => data.json());


  }

  addSchedule(myDate, groupID, myTime){
    console.log("in add Schedule");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': myDate,
        'groupID': groupID,
        'time': myTime
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/addSchedule`, body, {headers: headers})
      .map(data => data.json());


  }

  addKid(kidName, groupID, packageID){
    console.log("in add Kid");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidName': kidName,
        'groupID': groupID,
        'packageID': packageID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/addKid`, body, {headers: headers})
      .map(data => data.json());


  }

  addGroup(groupName){
    console.log("in add Group");

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupName': groupName
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/addGroup`, body, {headers: headers})
      .map(data => data.json());


  }

  getScheduleAll(myDate){
    console.log("in show schedule");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {

      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getCalendarKidDate`, body, {headers: headers})
      .map(data => data.json());
  }


  getSchedule(myDate, kidID){
    console.log("in show schedule");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': kidID,
        'strDate' : myDate
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getCalendarKidDate`, body, {headers: headers})
      .map(data => data.json());
  }

  getScheduleKid(kidID){
    console.log("in getScheduleKid, kidID = " + kidID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': kidID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getCalendarAllKid`, body, {headers: headers})
      .map(data => data.json());
  }

  saveSchedule(item, myDate){
    console.log("in save Schedule");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': myDate,
        'groupID': item.groupID,
        'calendarID': item.calendarID,
        'groupName' : item.groupName,
        'time': item.time
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/updateSchedule`, body, {headers: headers})
      .map(data => data.json());
  }

  getKids(){
    console.log("in get Kids");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': 'myDate'
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getKids`, body, {headers: headers})
      .map(data => data.json());
  }

  viewAttendanceForKid(item){
    console.log(" in view attendance for kid, kidID = " + item.kidID);

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': item.kidID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/viewAttendanceKid`, body, {headers: headers})
      .map(data => data.json());
  }

  viewAttendanceForKidGroup(item){
    console.log(" in view attendance for kid, kidID = " + item.kidID);

    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': item.kidID,
        'groupID': item.groupID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/viewAttendanceKidGroup`, body, {headers: headers})
      .map(data => data.json());
  }


  checkAttendance(item){
    console.log(" in check attendance for kid, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'date': item.date,
        'groupID': item.groupID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/checkAttendance`, body, {headers: headers})
      .map(data => data.json());
  }

  getKidsInGroup(item){
    console.log(" in getKidsInGroup, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupID': item.groupID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/getKidsInGroup`, body, {headers: headers})
      .map(data => data.json());
  }

  markAttendance(item, kidsList){
    console.log(" in markAttendance, groupID = " + item.groupID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'groupID': item.groupID,
        'kidsList': kidsList,
        'date': item.date

      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/markAttendance`, body, {headers: headers})
      .map(data => data.json());
  }

  viewFeesForKid(item){
    console.log(" in view Fee for kid, kidID = " + item.kidID);
    let headers = new Headers ({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        'kidID': item.kidID
      }
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

      //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
     return this.http.post(`https://coachingapp-203705.appspot.com/viewFees`, body, {headers: headers})
      .map(data => data.json());
  }

  payFees(kidID, myDate){
    console.log(" in payFees for kid, kidID = " + kidID);
    console.log(" in payFees, date received =  " + myDate);
      let headers = new Headers ({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = {
          'kidID': kidID,
          'dateOfAttendance':myDate
        }
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

        //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
      return this.http.post(`https://coachingapp-203705.appspot.com/payFees`, body, {headers: headers})
        .map(data => data.json());

  }

  getKidInfoParent(parent){
    console.log("In get Kids InfoParent");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'parentID': parent[0].parentID
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/getKidInfoParent`, body, {headers: headers})
    .map(data => data.json());
  }

  getKidsFeeParent(parent){
    console.log("In get Kids InfoParent");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'parentID': parent[0].parentID
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');
    console.log("sending parent id as " + parent[0].parentID);

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/getKidsFeeParent`, body, {headers: headers})
    .map(data => data.json());
  }

getKidInfoParentToday(parent, date){
    console.log("In get Kids InfoParent");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'parentID': parent[0].parentID,
      'strDate': date
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');
    console.log("sending parent id vas " + parent[0].parentID);

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/getKidInfoParentToday`, body, {headers: headers})
    .map(data => data.json());
  }

  updateKid(kid){
    console.log("In update Kid Info");
    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'kidID': kid.kidID,
      'kidName': kid.kidName,
      'groupID': kid.groupID
    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/updateKid`, body, {headers: headers})
    .map(data => data.json());

  }

updateGroup(group){
  console.log("In update Group ");
  let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'groupID': group.groupID,
      'groupName': group.groupName

    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');

    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/updateGroup`, body, {headers: headers})
    .map(data => data.json());
}
getParentID(user){
  console.log("In getParentID ");
  let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      'parentName': user

    }
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');
    console.log("sending parent name as : " + user);
    //return this.http.post(`http://172.20.10.2:8080/getKids`,body, {headers: headers1})
  return this.http.post(`https://coachingapp-203705.appspot.com/getParentID`, body, {headers: headers})
    .map(data => data.json());
}

}
