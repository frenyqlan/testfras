import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fras app';
  heading = 'heading her';
  hello = this.title + this.heading;

  isClicked(){
    this.hello = "Opps! I clicked the button!";
  }
}
