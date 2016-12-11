import { Component, ViewChild} from '@angular/core';
import { NavController, Content, MenuController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  greeting: string;
  @ViewChild('mySlider') mySlider: any;
  @ViewChild('aboutme') aboutme: any;
  @ViewChild(Content) content:Content;
  displayData : string;
  mySlideOptions : any;
  logoUrl : string;
 
  constructor(public navCtrl: NavController, menu: MenuController, public http: Http ) {
      menu.enable(true);
      
      this.mySlideOptions = {
        slidesPerView:1,
        pager: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",        
            onInit:()=>{
          }
      }
      
      let headers = new Headers({ 'Content-Type': 'application/json' , 
                                 'JsonStub-User-Key': '66801ca2-c3cf-4379-bb8c-99864b86fada' , 
                                 'JsonStub-Project-Key': '7afeb859-60a2-4b00-b9de-5abb28086773' });
      this.http.get('http://jsonstub.com/portfolio', {headers: headers})
      .subscribe(res => {
          this.displayData = res.json();
      });

      //Below images for lazy load 
      this.logoUrl ="../../assets/img/mscreativepixel_logo.png";
      
        /*this.displayData = [{
            "title": "",
            "items": [{
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "icn": "ionic",
                "itemUrl": "../../assets/img/portfolio/portfolio_frognerhelsekost.jpg"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_eHealth.jpg"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_curacao2.jpg"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_goodattorneys.jpg"
            }]
        }, {
            "title": "",
            "items": [{
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_wedandwish.jpg"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_carrynotes2.jpg"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_Nowlegal.png"
            }, {
                "name": "Marty McFly",
                "info": "Wait a minute. Wait a minute, Doc. Uhhh...",
                "itemUrl": "../../assets/img/portfolio/portfolio_curacao.jpg"
            }]
        }];*/
      
     
      
  }

    onPageScroll(event) {
        //console.log(event.target.scrollTop);
        if (event.target.scrollTop>document.querySelector('#intrested-sectors').offsetTop-100){
        //if (event.target.scrollTop>500){
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
        this.content.scrollTo(1000, 1000, 500);
    }
        

      //Footer Form
      todo = {}
      logForm() {
        console.log(this.todo)
      }
}
