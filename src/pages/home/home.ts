import { Component,  ViewChild } from '@angular/core';
import {  NavController,NavParams  } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
 import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('username') uname;
  @ViewChild('password') password;

//to generate error message in case of form

  formgroup:FormGroup;
   username:AbstractControl;
 pwd:AbstractControl;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder:FormBuilder ) {
   this.formgroup =formbuilder.group({
     username:['',Validators.required],
      pwd:['',Validators.required]
     });

    this.username = this.formgroup.controls['username'];
    this.pwd = this.formgroup.controls['pwd'];
  }
  signIn(){
  
  	if(this.uname.value == 'user'&& this.password.value == 'user')
  	{
  		this.navCtrl.push(ProfilePage);
    
  	}
  }

}
