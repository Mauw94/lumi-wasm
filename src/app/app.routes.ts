import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LumiComponent } from './lumi/lumi.component';
import { ImageGenComponent } from './image-gen/image-gen.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lumi', component: LumiComponent },
    { path: 'about', component: AboutComponent },
    { path: 'image-gen', component: ImageGenComponent }
];

