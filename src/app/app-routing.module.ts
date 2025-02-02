import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlbumDescriptionComponent } from './albums-descriptions/albums-descriptions.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'album/:id', component: AlbumDescriptionComponent },
  {path: 'albums',component: AlbumsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
