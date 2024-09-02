import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Counters} from "../models/counters-data.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  private apiUrl = 'assets/mock-data/counters.json';

  constructor(private http: HttpClient) { }

  loadCounters(): Observable<Counters> {
    return this.http.get<Counters>(this.apiUrl);
  }
}
