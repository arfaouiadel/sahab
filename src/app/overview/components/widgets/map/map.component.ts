import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    DividerModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
