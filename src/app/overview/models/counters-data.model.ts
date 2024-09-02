export interface Counters {
  TotalVehicles: number;
  TotalVehiclesCovered: number;
  WorkingHours: number;
  ActiveRequests: number;
  UtilizationRate: string; // This field is a string because it includes a percentage symbol
}

export interface Counter {
  key?: string;
  name?: string;
  value?: any;
}

export enum CounterName {
  TotalVehicles = 'Total Vehicles',
  TotalVehiclesCovered = 'Vehicles Covered',
  WorkingHours = 'Working Hours',
  ActiveRequests = 'Active Requests',
  UtilizationRate = 'Utilization Rate'
}
