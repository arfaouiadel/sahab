import {Component, OnInit} from '@angular/core';
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {MenuItem} from "primeng/api";
import {SelectButtonModule} from "primeng/selectbutton";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MenuModule,
    BadgeModule,
    AvatarModule,
    SelectButtonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  items!: MenuItem[];
  themeMode: any[] = [{ label: 'Light', value: 'light' },{ label: 'Dark', value: 'dark' }];

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' }
    ];
  }
}
