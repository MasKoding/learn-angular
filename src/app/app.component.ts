import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ slideInAnimation ]
})
export class AppComponent {
  title = 'MyFirstAngular';
  navbarOpen= false;

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen
  }
  getAnimationData(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
