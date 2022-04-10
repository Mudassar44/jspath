import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'JsPath';
  objectList:any;
  /*
   query Selector of JS update dom element
   */
  
  constructor() {
    this.declaringVariable();
    this.booleanCoercion(3,4,5,333,3,3,3,3);
      if(this.interpolation()) {

        console.log(this.interpolation());
      }
  }

  interpolation() {
    let strArray = ['1,2,3,4,5','1,4,5'];
    let arr1 = strArray[0].split(',').map((val)=> Number(val));
    let arr2 = strArray[1].split(',').map((val)=> Number(val));
    let finalResult = [];
    let chooseArray = 0;
    let n = 0;
    if(arr1.length > arr2.length) {
      chooseArray = 0;
      n = arr1.length;
    } else {
      chooseArray = 1;
      n = arr2.length;
    }

    for(let i=0; i < n; i++) {
      if(chooseArray == 0) {
        if(arr1.includes(arr2[i])) {
          finalResult.push(arr2[i]);
        }
      } else {
        if(arr2.includes(arr1[i])) {
          finalResult.push(arr2[i]);
        }
      }
    }

    return  finalResult && finalResult.length ? finalResult.join(',') : false;

  }
  booleanCoercion(...aa) {
    console.log(aa.length);
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
