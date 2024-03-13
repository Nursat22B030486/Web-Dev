import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{
  albums!: Album[];
  loading !: boolean;

  constructor(private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loading = true;
    });
  }

  ngOnDestroy() {
  }

  removeAlbum(album: Album){
  this.albums = this.albums.filter(a => a != album)
  }


}
