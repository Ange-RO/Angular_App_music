import { Component ,inject} from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Albums } from '../interfaces/albums';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
albumsList:Albums[] = [];
albumsService: AlbumsService = inject(AlbumsService)

constructor() {
  this.albumsList = this.albumsService.getAllAlbums();
}

}
