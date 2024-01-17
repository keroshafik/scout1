import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../services/get-service.service';
import { Users } from '../Models/Users';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  sub: Subscription | null = null;
  Users: Users[] | null = null;
  public notFavorite = true;
  public Price: any;
  activeSlideIndex: number[] = [];

  constructor(
    private GetServiceService: GetServiceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.router.queryParams.subscribe((data) => {
      this.GetServiceService.getAllUsers().subscribe((data) => {
        this.Users = data;
        this.activeSlideIndex = new Array(this.Users.length).fill(0);
      });
    });
  }

  // nextSlide(index: number) {
  //   this.activeSlideIndex[index] = (this.activeSlideIndex[index] + 1) % (this.Users?.[index]?.photos?.length ?? 0);
  // }

  // prevSlide(index: number) {
  //   this.activeSlideIndex[index] = (this.activeSlideIndex[index] - 1 + (this.Users?.[index]?.photos?.length ?? 0)) % (this.Users?.[index]?.photos?.length ?? 0);
  // }

}
