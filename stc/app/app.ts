import {App, IonicApp, Platform} from 'ionic-angular';
import {AuthService} from './providers/auth-service/auth-service';
import {HomePage} from './pages/home/home';
import {CoursesPage} from './pages/courses/courses';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    AuthService
  ]
})
class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform, private auth: AuthService) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Courses', component: CoursesPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
