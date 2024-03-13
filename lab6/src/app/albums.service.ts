import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, PhotosAlbum} from "./models";


@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getAlbumPhoto(id: number) {
    return this.client.get<PhotosAlbum[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  updateAlbum(id: number, title: String): Observable<Album>{
    const payload = {"title" : title};
    console.log(payload)
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, payload);
  }
}
