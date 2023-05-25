import { Component, OnInit } from '@angular/core';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entrance: boolean = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('entrance') === null) {
      disableScroll.on();
      this.entrance = true;
      setTimeout(() => {
        this.entrance = false;
        sessionStorage.setItem('entrance', this.entrance.toString())
        disableScroll.off();
      }, 5000);
    }
  }

}
