import { Component } from '@angular/core';

import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wonderbread';

  currentUser: any;

  constructor(
    private authenticationService: AuthenticationService
    //needs the router
    ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(){
    this.authenticationService.logout();
    
    //needs to rout to the login page
    
  }
}
