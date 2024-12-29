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

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

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

  isElementInView = (elem: HTMLElement, type: "partial" | "complete"): boolean => {
    const rec = elem.getBoundingClientRect();

    const elementTop = rec.top;
    const elemBottom = rec.bottom;

    const partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;
    const completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event: Event): void => {
    if (!event || Object.keys(event).length < 1) return;

    for (const screen of TOTAL_SCREENS as Screen[]) {
      const screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      const fullyVisible = this.isElementInView(screenFromDOM, "complete");
      const partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen.alreadyRendered = true;
          break;
        }

        if (fullyVisible) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}