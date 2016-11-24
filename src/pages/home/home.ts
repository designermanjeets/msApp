import { Component, ViewChild,Renderer} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  greeting: string;
  @ViewChild('mySlider') mySlider: any;
  @ViewChild('aboutme') aboutme: any;
  @ViewChild(Content) content:Content;


  constructor(public navCtrl: NavController, private renderer:Renderer) { }

    onPageScroll(event) {
        
        if (event.target.scrollTop>document.querySelector('.yoman').offsetTop){
            console.log('Greater Than');
        } else {
            console.log('Less Than');
        }
     
        
    }


    ngAfterViewInit() {
        this.content.addScrollListener(this.onPageScroll);
         console.log(this.renderer.selectRootElement('.yoman'));
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
