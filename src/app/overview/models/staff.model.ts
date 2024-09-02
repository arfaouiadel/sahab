export interface StaffModel {
  name?: string;
  function?: string;
  image?: string;
  presenceStatus?: PresenceStatus;
}

export enum PresenceStatus {
  ATTENDING = 'Attending',
  LATE = 'Late',
  PRESENT='Present'
}

export interface StaffResponseModel {
  content: Array<StaffModel>;
}
