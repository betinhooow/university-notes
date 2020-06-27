import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BtwComponents';
  data1 = 'ok';
  data2 = 'ok';
  message = 'Click on a button';
  textBtnConfig = {
    styles: {
    },
    text: 'Click Here'
  };

  imgBtnConfig = {
    src: './../assets/img/myself.jpg'
  };

  onClickEventReceived(event: string) {
    this.message = event;
  }
}
