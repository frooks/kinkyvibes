import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PartyComponent } from './party/party.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}, 
    { path: 'calendar', component: ContactComponent}, 
    { path: 'parties', component: PartyComponent}, 
    { path: 'service', component: ServiceComponent}, 
    { path: 'gallery', component: GalleryComponent}, 
];
