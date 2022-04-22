import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailI } from 'src/app/models/detail-i';
import { DataService } from '../services/services-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public details: DetailI[];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.details = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getData(id);
    });
  }

  getData(id: number | string) {
    this.dataService.getDetail(id).subscribe((data) => {
      this.details = data;
    });
  }
  back() {
    this.router.navigate(['list']);
  }
}
