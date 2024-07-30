import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  standalone: true,
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'], 
  imports: [NgxExtendedPdfViewerModule],
})

export class PdfViewerComponent implements OnInit {
  pdfSrc: string = '';
 
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['filename']);
    const filename = this.route.snapshot.params['filename'];
    this.pdfSrc = `http://172.29.192.1:85//${filename}.pdf`
   }

}



