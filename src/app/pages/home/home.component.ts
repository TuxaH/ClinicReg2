import { Component } from '@angular/core';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public loginService: LoginService) {}
}
