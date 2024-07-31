import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SettingsService } from '../config/settings.service';



@Component({
  standalone: true,
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'], 
  imports: [NgxExtendedPdfViewerModule],
})

export class PdfViewerComponent implements OnInit {
  pdfSrc: string = '';
  ip = inject(SettingsService).settings.BaseIp;

 
 
  constructor(private route: ActivatedRoute) {
  }
  
//   getLocalIPAddress() {
//   const os = require('os');
//   const interfaces = os.networkInterfaces();
// 	  for (const interfaceName in interfaces) {
// 		  const addresses = interfaces[interfaceName];
// 		  for (const i in addresses) {
// 			  const address = addresses[i];
// 			  if (address.family === 'IPv4' && !address.internal) {
// 				  return address.address;
// 			  }
// 		  }
// 	  }
// 	  return 'Unable to determine local IP address';
//   }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['filename']);
    const filename = this.route.snapshot.params['filename'];
    this.pdfSrc = `${this.ip}${filename}.pdf`

    //
   }

}



