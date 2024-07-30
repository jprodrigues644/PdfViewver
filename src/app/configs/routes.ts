import { Routes } from '@angular/router';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { AppComponent } from '../app.component';

export const routes: Routes = [
  { path: 'pdf/:filename', component: PdfViewerComponent },
  { path: '', component: AppComponent }
];