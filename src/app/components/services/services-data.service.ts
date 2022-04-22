import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DataI } from 'src/app/models/dataI';
import { DetailI } from 'src/app/models/detail-i';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API = environment.APIEndpoint;

  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<DataI[]> {
    return this.http.get<DataI[]>(this.API);
  }

  getDetail(id: string | number): Observable<DetailI[]> {
    return this.http.get<DetailI[]>(this.API + `/${id}/photos`);
  }
}
