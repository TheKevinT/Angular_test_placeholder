import { Component, OnInit } from '@angular/core';
import { DataI } from 'src/app/models/dataI';
import { DataService } from '../services/services-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public albums: DataI[];
  public search: string = '';
  public page: number = 0;
  constructor(private dataService: DataService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getAllAlbums().subscribe((data) => (this.albums = data));
  }
  onSearch(search: string) {
    this.page = 0;
    this.search = search;
  }
  nextpage() {
    this.page += 10;
  }
  backpage() {
    if (this.page > 0) this.page -= 10;
  }
}
