import { Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {tryUnwrapForwardRef} from "@angular/compiler-cli/src/ngtsc/annotations/common";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AlbumPhotosComponent} from "../album-photos/album-photos.component";


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    AlbumPhotosComponent,
    RouterOutlet
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album !: Album;
  edit !: boolean;
  updateAlbum !: Album;


  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.albumService.getAlbum(id).subscribe((album) => {
          this.album = album;
        })
      }
    })
  }


  canEdit() {
    this.edit =  Boolean(true);
  }

  // saveTitle(album: Album) {
  //   album.id = this.album.id;
  //   this.albumService.updateAlbum(album.id, album.title).subscribe(
  //     this.album.title = String(album.title);
  //   )}

}
