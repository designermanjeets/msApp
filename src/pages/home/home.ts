import { Component, ViewChild } from '@angular/core';
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

  constructor(public navCtrl: NavController) { }

    onPageScroll(event) {
        //console.log(event.target.scrollTop);
         console.log(aboutmeOffset + 'dsadadad');
        
        
        
    }
    ngAfterViewInit() {
        this.content.addScrollListener(this.onPageScroll);
        let aboutmeOffset = this.aboutme.nativeElement.offsetTop;
        console.log(this.aboutme.nativeElement.offsetTop);
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
