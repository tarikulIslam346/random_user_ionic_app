# random_user_ionic_app

# Feature 

- Authenication (not secure way)
````
if(this.uname.value == 'user'&& this.password.value == 'user')
  	{
  		this.navCtrl.push(ProfilePage);
    
  	}
````
-  Random user API call
````
https://randomuser.me/api/
````
-  Spinner loader
    
````
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000// duration 3 sec
    });
    loader.present();
  }
````
