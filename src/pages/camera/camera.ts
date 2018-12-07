import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  myPhoto:any;

  constructor(public navCtrl: NavController, private camera:Camera) {

  }

takePhoto(){
  const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.myPhoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
}

}
