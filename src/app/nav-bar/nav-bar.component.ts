import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../app/services/authentication.service";
import { Authorized } from "../Models/Authorized";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  public authorized: Authorized = new Authorized("", false);

  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.authService.isAuth$.subscribe((value) => {
      this.authorized.Role = value.Role;
      this.authorized.isAuthorized = value.isAuthorized;
    });
    this.checkIfUserLoggedIn();
  }
  checkIfUserLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("role")) {
      this.authorized.isAuthorized = true;
      this.authorized.Role = localStorage.getItem("role");

      this.authService.isAuth$.next(this.authorized);
    }
  }
  logout() {
    this.authService.logout();
  }

}
