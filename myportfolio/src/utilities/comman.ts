import Home from "../Container/Home/Home";
import AboutMe from "../Container/AboutMe/AboutMe.tsx";
import Resume from "../Container/Resume/Resume";
import ContactMe from "../Container/ContactMe/ContactMe.tsx";
import Projects from "../Container/Projects/Projects.tsx";

// Define the type for a screen
interface Screen<P = {}> {
  screen_name: string;
  component: React.ComponentType<P>;
}
interface AboutMeProps {
  id: string;
}

export const TOTAL_SCREENS: Screen[] = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe as React.ComponentType<{}>,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Projects",
    component: Projects as React.ComponentType<{}>,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe as React.ComponentType<{}>,
  },
];

export const GET_SCREEN_INDEX = (screen_name: string): number => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};