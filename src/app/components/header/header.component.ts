import { Component } from '@angular/core';
import disableScroll from 'disable-scroll';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  active: boolean = false;

  activeMenu() {
    this.active = !this.active
    this.active ? disableScroll.on() : disableScroll.off()
  }

}
