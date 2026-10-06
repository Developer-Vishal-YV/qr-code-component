import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-qr-code-component-page',
  styleUrl: './qr-code-component-page.css',
  templateUrl: './qr-code-component-page.html',
})
export class QrCodeComponentPage {

  qr_code_image_link: string = "images/QR_Image.png";
  qr_code_image_description: string = "I have attached the QR Code Image.";

  title: string = "Improve your front-end skills by building projects";

  description: string = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

}
