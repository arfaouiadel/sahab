import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StaffResponseModel} from "../models/staff.model";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private STAFF_PATH: string = 'assets/mock-data/staff.json';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  loadStaffList = (): Observable<StaffResponseModel> => {
    return this.httpClient.get<StaffResponseModel>(`${this.STAFF_PATH}`, {observe: 'body'}).pipe(
      map(staffResponse => {
        return staffResponse;
      })
    );
  }
}
