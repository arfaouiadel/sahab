import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../shared/components/sidebar/sidebar.component";
import {Button} from "primeng/button";
import {StaffService} from "../services/staff.service";
import {NgForOf, NgIf} from "@angular/common";
import {TagModule} from "primeng/tag";
import {StaffComponent} from "../components/widgets/staff/staff.component";
import {FilterComponent} from "../components/filter/filter.component";
import {MapComponent} from "../components/widgets/map/map.component";
import {CounterComponent} from "../components/widgets/counter/counter.component";
import {Counter, CounterName, Counters} from "../models/counters-data.model";
import {CountersService} from "../services/counters.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    Button,
    NgIf,
    NgForOf,
    TagModule,
    StaffComponent,
    FilterComponent,
    MapComponent,
    CounterComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit, OnDestroy {

  staffList! : any;
  counters!: Counter[];
  private _subscription: Subscription = new Subscription();

  constructor(
    private staffService: StaffService,
    private countersService: CountersService,
  ) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getStaffList();
    this.getCounters();
  }

  getStaffList(): void {
    this._subscription.add(
      this.staffService.loadStaffList().subscribe(
        {
          next: (response) => {
            this.staffList = response;
            console.log(this.staffList)
          },
          error: (err) => {
            console.error('Error loading staff data', err);
          }
        }
      )
    )
  }

  getCounters(): void {
    this._subscription.add(
      this.countersService.loadCounters().subscribe({
        next: (response) => {
          this.counters = this.convertToWidgetCounter(response)
          console.log(this.counters)
        },
        error: (err) => {
          console.error('Error loading counters data', err);
        }
      })
    )

  }

  convertToWidgetCounter(obj: Counters): Counter[] {
    return Object.entries(obj).map(([key, value]) => ({
      key,
      name: this.mapKeyToName(key),
      value
    }));
  }

  mapKeyToName(key: string): string {
    return CounterName[key as keyof typeof CounterName] || key;
  }

}
