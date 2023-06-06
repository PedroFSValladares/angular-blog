import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() topic:string = ''
  @Input() publishDate:string = ''
}
