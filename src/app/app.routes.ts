import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'chat',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/chat',
        pathMatch: 'full'
    }
];
