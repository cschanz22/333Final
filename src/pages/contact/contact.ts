import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  brightness: number;

  constructor(private bright: Brightness, public navCtrl: NavController) {

  }

  setBrightness(){
    let newBrightness = this.brightness / 10;
    this.bright.setBrightness(newBrightness);
  }

}
