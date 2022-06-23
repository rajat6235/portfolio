import { TOTAL_SCREENS } from "./comman"
import {Subject} from 'rxjs'


export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

constructor(){
    window.addEventListener("scroll",this.checkCurrentScreenUnderViewPort)
} 
scrollToHireMe= () =>{
    let  contactMeScreen =  document.getElementById("ContactMe")
    if (!contactMeScreen) return ;
    contactMeScreen.scrollIntoView({behavior:"smooth"})
}
scrollToHome= () =>{
    let  homeScreen =  document.getElementById("Home")
    if (!homeScreen) return ;
    homeScreen.scrollIntoView({behavior:"smooth"})
}
isElementInView = (elem , type ) =>{
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.Bottom;
    
    let partiallyVisible = elementTop < window.innerHeight && elementBottom>=0;
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch(type){
        case "partial":
            return partiallyVisible;

            case "complete":
            return completelyVisible;

            default : 
            return false
    }
};

checkCurrentScreenUnderViewPort = (event) => {
    if (!event || Object.keys(event).length<1)
    return;
    for (let screen of TOTAL_SCREENS){
        let screenFromDom = document.getElementById(screen.screen_name);
        if (!screenFromDom)
        continue;

        let fullyvisible = this.isElementInView(screenFromDom, "complete");
        let partiallyVisible = this.isElementInView(screenFromDom, "partial");
        if (fullyvisible || partiallyVisible){
            if (partiallyVisible && !screen.alreadyRendered){
                ScrollService.currentScreenFadeIn.next({
                    fadeInScreen : screen.screen_name,
                });
                screen['alreadyRendere']=true;
                break;
            }
            if (fullyvisible){
                ScrollService.currentScreenBroadCaster.next({
                    screenInView : screen.screen_name,
                });
                break;
            }
        }

    }
};
}