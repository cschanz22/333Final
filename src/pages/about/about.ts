import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lat: any;
  lng: any;
  watchId: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {
    this.lat = "-";
    this.lng = "-";
  }
startGeo(){
  let geoOption = {enableHighAccuracy : true};
  try
  {
    this.watchId = this.geo.watchPosition(geoOption).subscribe(data =>
    {
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
    })

  }catch(err)
  {
    alert("Error " + err);
  }


}

}
