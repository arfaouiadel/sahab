import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {MultiSelectModule} from "primeng/multiselect";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";

interface Region {
  name: string,
  code: string
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    Button,
    MultiSelectModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  regions: Region[] = [
    { name: 'Riyadh Region', code: 'RR' },
    { name: 'Riyadh, Zone 1', code: 'RZ1' },
    { name: 'Riyadh, Zone 2', code: 'RZ2' }
  ];

  filtersForm!: FormGroup
  constructor( ) {
  }

  ngOnInit(): void {
    this.buildFilterForm();
  }

  buildFilterForm(): void {
    this.filtersForm = new FormGroup({
      selectedRegions: new FormControl(),
      date: new FormControl<Date | null>(new Date())

    });
  }

}
