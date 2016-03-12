import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class AuthService {
  firebaseUrl: string;
  firebaseRef: Firebase;
	isLoggedIn: boolean;
	authData: any;
	
  constructor() {
    this.firebaseUrl = "https://seize-the-chains.firebaseio.com/";
    this.firebaseRef = new Firebase(this.firebaseUrl);
    this.firebaseRef.onAuth((user) => {
			if (user) {
				this.authData = user;

				this.isLoggedIn = true;
			}
		});
  }

  authWithPassword(credentials: {email: string, password: string}) {
    this.firebaseRef.authWithPassword(credentials, (error) => {
      if(error) {
        console.log(error);
      }
    });
  }
  
  logout() {
    this.firebaseRef.unauth();
    this.isLoggedIn = false;
  }
}

