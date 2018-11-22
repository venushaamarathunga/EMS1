import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Management Syatem';
  show = true;
  clickone(){
      this.show = !this.show;
  }
}
