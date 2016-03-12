import {App, IonicApp, Page, NavController} from 'ionic-angular';
import {AuthService} from '../../providers/auth-service/auth-service';
import {CoursesPage} from '../courses/courses';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
	model: any;
	coursesPage: any;

  constructor(private app: IonicApp, private nav: NavController, private auth: AuthService) {
    this.nav = nav;
    
    this.model = {
		  email: '',
		  password: ''
		};
		
		this.coursesPage = CoursesPage;
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page);
  }
}
