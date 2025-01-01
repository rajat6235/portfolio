import { TOTAL_SCREENS } from "./comman.ts";
import { Subject } from 'rxjs';

interface Screen {
  screen_name: string;
  alreadyRendered?: boolean;
}

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadcaster = new Subject<{ screenInView: string }>();
  static currentScreenFadeIn = new Subject<{ fadeInScreen: string }>();



  scrollToHireMe = (): void => {
    const contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = (): void => {
    const homeScreen = document.getElementById("Home");
    if (!homeScreen) return;

    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  static observeScreens = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const screenName = entry.target.id;
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screenName,
          });
        }
      });
    }, { threshold: [0.1, 0.5, 1.0] });
  
    TOTAL_SCREENS.forEach((screen) => {
      const element = document.getElementById(screen.screen_name);
      if (element) {
        observer.observe(element);
      }
    });
  };

}