import { Injectable } from '@angular/core';
import { Albums } from '../interfaces/albums';
import albumsList from '../mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albumsList:Albums[] = albumsList
  constructor() { }

  getAllAlbums():Albums[] {
    return this.albumsList;
  }
  
getAlbumsById(id: string): Albums | undefined {
  return this.albumsList.find(albums => albums.id ===id);
}
showAside (id:string) {
return this.albumsList.find((e)=>e.id===id)
}


}
