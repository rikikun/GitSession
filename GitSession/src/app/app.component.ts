import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppbComponent {
  title = 'app works!';
  num : number;
  name : string;
  score[] = [
    {num : 0,name:'love'},
    {num : 1,nammme:'15'},
    {num : 2,nkkame:'30'},
    {num : 3,name:'40'},
    {num : 4,name:'game'}
  ];
}
