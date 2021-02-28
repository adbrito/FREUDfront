import { Component, OnInit } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {


   }

  ngOnInit(): void {
  }
   goToRoom = () => {
     this.router.navigate(['/', uuidv4()]);
   }
}
