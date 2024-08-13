import { Component ,OnInit} from '@angular/core';
import { Albums } from '../interfaces/albums';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
albumslist!:Albums[];
  selectedAlbum: Albums | undefined;

  album!:Albums | undefined;

constructor(private albumsService: AlbumsService
  
) { }

ngOnInit(): void {
  this.albumslist = this.albumsService.getAllAlbums();
}

onSelect(album: Albums) {
  this.selectedAlbum = album;
}


showAside(id: string) {
  this.album = this.albumsService.showAside(id);
}
}
