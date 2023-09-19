import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // We are depending on Router Class, so we have injected it's instance without creating it's object
  constructor(private router: Router) { // instance of router class is used
  }
  openHarsh() {
    // alert('Harsh will be opened');
    this.router.navigateByUrl('/harsh');
  }
}
