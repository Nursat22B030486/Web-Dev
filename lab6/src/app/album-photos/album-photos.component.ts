import {Component, Input, OnInit} from '@angular/core';
import {Album, PhotosAlbum} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AlbumsService} from "../albums.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos !: PhotosAlbum[];
  id !: number;
  loaded !: boolean;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.albumService.getAlbumPhoto(this.id).subscribe((photos)=>{
      this.photos = photos;
    })
    this.loaded = true;
  }
}
