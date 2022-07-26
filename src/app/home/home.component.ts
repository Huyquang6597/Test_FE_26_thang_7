import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('ID');
    // localStorage.removeItem('token')
    this.router.navigate(['/login'])
    alert("Logout Successfully!")
  }
}
