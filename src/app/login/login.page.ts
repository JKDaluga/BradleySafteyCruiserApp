import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  loadString(url:string) {
    this.router.navigateByUrl(url);
  }
  
  //TODO: Hash/encrypt password IMMEDIATLY upon entering it
  login(id:string, pass:string)
  {
    // hash/encrypt password
    // Send to server for verification
    // Recieve token, let in/reject

    
    // Test code
    console.log("Logging in, id is ", id);
    console.log("Logging in, pass is ", pass);
  }

}
