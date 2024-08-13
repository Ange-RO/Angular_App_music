import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../interfaces/albums';
import {AlbumsService} from '../services/albums.service'

@Component({
  selector: 'app-albums-descriptions',
  templateUrl: './albums-descriptions.component.html',
  styleUrl: './albums-descriptions.component.css'
})
export class AlbumDescriptionComponent implements OnInit {
  album?: Albums;
  albumId!: string;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    // récupérer l'identifiant
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id') || '';
      this.album = this.albumsService.getAlbumsById(this.albumId)
    });
  }

  
}
