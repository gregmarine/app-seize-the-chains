import {Page, NavController} from 'ionic-angular';
import {AuthService} from '../../providers/auth-service/auth-service';

@Page({
  templateUrl: 'build/pages/courses/courses.html',
})
export class CoursesPage {

  constructor(private nav: NavController, private auth: AuthService) {
    this.nav = nav;
  }
}
