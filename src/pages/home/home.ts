import { Component, ViewChild} from '@angular/core';
import { NavController, Content, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  greeting: string;
  @ViewChild('mySlider') mySlider: any;
  @ViewChild('aboutme') aboutme: any;
  @ViewChild(Content) content:Content;


  constructor(public navCtrl: NavController, menu: MenuController) {
      menu.enable(true);
      
      this.mySlideOptions = {
        slidesPerView:1,
        pager: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",        
            onInit:()=>{
          }
      }
          
  }

    onPageScroll(event) {
        //console.log(event.target.scrollTop);
        //if (event.target.scrollTop>document.querySelector('#intrested-sectors').offsetTop-100){
        if (event.target.scrollTop>500){
            console.log('Greater Than');       
            let outerCircles =  document.querySelectorAll('#intrested-sectors [outer-circle]');
            for( let i=0; i < outerCircles.length; i++ ) {
                outerCircles[i].classList.add('animate');
             }
            
        } else {
            console.log('Less Than');
            let outerCircles =  document.querySelectorAll('#intrested-sectors [outer-circle]');
            for( let i=0; i < outerCircles.length; i++ ) {
                outerCircles[i].classList.remove('animate');
             }
        }
     
        
    }

    ngAfterViewInit() {
        this.content.addScrollListener(this.onPageScroll);
        
    }

    scrollToAbout(){
        console.log('clicked');
        this.content.scrollTo(1000, 1000, 500);
    }
        

      //Footer Form
      todo = {}
      logForm() {
        console.log(this.todo)
      }


}
