import { Post } from './../Models/Post';
import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../services/get-service.service';
import { Users } from '../Models/Users';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public Posts: Post[]=[];
  constructor(
    private GetServiceService: GetServiceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    // this.sub = this.router.queryParams.subscribe((data) => {

    // });
    this.GetServiceService.getAll("post").subscribe((data) => {
      this.Posts = data;
      // this.activeSlideIndex = new Array(this.Users.length).fill(0);
    });
  }

}
