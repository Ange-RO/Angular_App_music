import { Component,OnInit,Input } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Aside } from '../interfaces/albums';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css'
})
export class AlbumsDetailsComponent {
@Input() show?:Aside
   
} 
