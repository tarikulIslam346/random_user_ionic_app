import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';//Loaing controller for spinner view
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public http:Http,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loadJson();//load json data when loading the page
    this.presentLoading();//load spinner view
    console.log('ionViewDidLoad ProfilePage');
  }

  //it 's  loading spinner programm
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000// duration 3 sec
    });
    loader.present();
  }
  

  users:any;
  //method for loading json data
  loadJson(){
  	this.http.get('https://randomuser.me/api/')//resource url
  	.map(res => res.json())
  	.subscribe(res =>{
  		this.users = res.results;
  		
  	},(err)=>{//if it fails then create error
       alert('failed Loading data');
  	});
  }

}
