import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'C:/projects/Angular/exam-app/src/app/login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
username:any

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
this.username = 't120151a'
  }

  public signOut() {
     this.authenticationService.logout();
  }
}
