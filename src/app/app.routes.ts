import { Routes } from '@angular/router';
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'overview', loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
  },
  {
    path: '**', pathMatch: 'full', component: PagenotfoundComponent
  }
];
