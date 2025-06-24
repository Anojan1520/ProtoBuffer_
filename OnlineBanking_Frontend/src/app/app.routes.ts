import { Routes } from '@angular/router';
import { RegisterComponent } from './Views/register/register.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' },
  ];