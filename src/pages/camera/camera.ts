import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public image ='';
  private options: CameraOptions;

  constructor(public navCtrl: NavController, private camera: Camera) {

      this.options= {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true //Corrects Android orientation quirks
    }
  }

getPicture(){
  this.camera.getPicture(this.options).then((imageData) => {
    this.image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    //Here's Where the error happen
  })
}

}
