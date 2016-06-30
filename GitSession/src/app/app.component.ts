import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  num : number;
  name : string;
  num2 : number;

  c1 : string;
  c2 : string;

  score = [
  {num : 0,name:'love'},
  {num : 1,name:'15'},
  {num : 2,name:'30'},
  {num : 3,name:'40'},
  {num : 4,name:'game'}
  ];

  score1 = [
  {num2 : 0,name:'love'},
  {num2 : 1,name:'15'},
  {num2 : 2,name:'30'},
  {num2 : 3,name:'40'},
  {num2 : 4,name:'game'}
  ];

  aaa(numbbb){
    console.log(this.num+this.num2);
    this.c1=this.score[this.num].name;
    this.c2=this.score1[this.num2].name;
  }
}
