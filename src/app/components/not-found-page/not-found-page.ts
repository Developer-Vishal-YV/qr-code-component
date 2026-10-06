import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-not-found-page',
  styleUrl: './not-found-page.css',
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {

  status_code: number = 404;
  status_code_description: string = "Page not found...";

}
