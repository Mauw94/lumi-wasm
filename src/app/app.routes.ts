import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LumiComponent } from './lumi/lumi.component';
import { ImageGenComponent } from './image-gen/image-gen.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lumi', component: LumiComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'image-gen', component: ImageGenComponent }
];

