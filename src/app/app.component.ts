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
    this.declaringVariable();
  }

  declaringVariable() {
    //Declaring different variables with different methods.
    var number : Number | undefined = 9;
    let name = 'JsPath';
    //Destructuring assignments.
    let a, b, rest;
    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20
    
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50]
    
    ({ a, b } = { a: 10, b: 20 });
    console.log(a); // 10
    console.log(b); // 20
    
    // Stage 4(finished) proposal
    ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // {c: 30, d: 40}

    // let name2, name3, name4 , othersName;
    // ({name2,name3,name4,othersName} = {name2: 'My Name2' , name3: 'My Name 3', name4 : 'My Name 4', othersName : 'My Others Name'}); 
    
    //Array Destructuring
    const foo = ['one','two','three'];
    const [red,yellow,green] = foo;
    console.log(red);
    console.log(yellow);
    console.log(green);
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
