import { Routes } from '@angular/router';
import { QrCodeComponentPage } from './components/qr-code-component-page/qr-code-component-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: "",
    component: QrCodeComponentPage
  },
  {
    path: "**",
    component: NotFoundPage
  }
];
