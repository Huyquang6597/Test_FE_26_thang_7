import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ID');
    this.router.navigate(['/'])
  }
  home() {
    this.router.navigate(['/home'])
  }
}
