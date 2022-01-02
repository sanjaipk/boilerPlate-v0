import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/userService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
        (response) => {
          this.userData = response;
          console.log(this.userData);
        },
        (error) => {
          console.error('error loading home ' + JSON.stringify(error, null, 2));
        }
      );
  }

}