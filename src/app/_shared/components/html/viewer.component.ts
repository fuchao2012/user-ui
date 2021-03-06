import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {SafeHtml, DomSanitizationService} from '@angular/platform-browser';
import {SimpleChanges} from '@angular/core/esm';

@Component({
  selector: 'html-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: [
    './viewer.component.scss'
  ],
})
export class HtmlViewerComponent implements OnChanges {
  @Input() content: string;
  private html: SafeHtml;

  constructor(private sanitizer: DomSanitizationService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['content'];
    if (change.currentValue) {
      this.html = this.sanitizer.bypassSecurityTrustHtml(change.currentValue);
    }
  }
}
