import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harsh',
  templateUrl: './harsh.component.html',
  styleUrls: ['./harsh.component.css']
})
export class HarshComponent {
  constructor(private router1: Router){

  }
  takeMeBack() {
    this.router1.navigateByUrl('/home');
  }
}
