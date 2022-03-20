import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'JsPath';

  /*
   query Selector of JS update dom element
   */
  
  constructor() {
  
  }

  ngAfterViewInit() {
    this.updateDomElement();
  }

  updateDomElement() {
    let headingDom : HTMLElement | null = document?.querySelector('h1');
    if(headingDom) headingDom.textContent = 'Hello World';

    let myImage : HTMLElement | null = document.querySelector('img');
    myImage?.addEventListener('click', () => { 
      console.log('clicked');

    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'assets/img/treeleaves.PNG') {
      myImage.setAttribute('src','assets/img/capture.PNG');
    } else {
      myImage.setAttribute('src','assets/img/treeleaves.PNG');
    }
  })
  }
}
