import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() views:number = 0
}
