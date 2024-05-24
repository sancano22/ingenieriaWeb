import { Component, OnInit } from '@angular/core';
import { Camera,CameraResultType, CameraSource} from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage{

  constructor(private sanitizer: DomSanitizer) {
   
  }
  
}
/*
  async takePictureUri() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

     this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }
  
  async takePictureBase64() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + (image.base64String));
  }
  async takePictureDataUrl() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

 */
  

