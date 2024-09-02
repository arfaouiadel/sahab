import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TagModule} from "primeng/tag";
import {StaffModel} from "../../../models/staff.model";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    NgForOf,
    TagModule,
    DividerModule
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent implements OnInit {

  @Input() staffList!: StaffModel[];

  ngOnInit() {
  }

  getPresenceStatus(staff: StaffModel): any {
    switch(staff.presenceStatus) {
      case 'Attending':
        return {
          'class': 'info',
        }
      case 'Late':
        return {
          'class': 'warning',
        };
      case 'Present':
        return {
          'class': 'danger',
        };
      default:
        return {
          'class': 'success',
        };
    }
  }

}
