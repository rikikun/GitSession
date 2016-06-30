import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  score = [
    {id: 0, name: "love" },
    {id: 1, name: "15" },
    {id: 2, name: "30" },
    {id: 3, name: "40" },
    {id: 0, name: "game" }
  ]
}
