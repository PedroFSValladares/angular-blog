import { Component } from '@angular/core';

type MenuButton = {
  route:string
  iconName:string
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  menuButtons:MenuButton[] = [
    {route: '/', iconName: 'home'},
    {route: 'heath', iconName: 'ecg_heart'},
    {route: 'politcs', iconName: 'library_books'},
    {route: 'sports', iconName: 'sports_basketball'},
    {route: 'travel', iconName: 'room_service'},
    {route: 'business', iconName: 'work'},
    {route: 'favorites', iconName: 'bookmark'},
    {route: 'search', iconName: 'search'},
  ]
}
