import { Component, OnInit } from '@angular/core';
import disableScroll from 'disable-scroll';
import * as Aos from 'aos';
import { AosOptions } from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  entrance: boolean = false;

  options: AosOptions = {
    duration: 1000,
  }

  lineaFinaGallery: string[] = ['../assets/img/linea-fina.jpg', '../assets/img/linea-fina-2.jpg', '../assets/img/linea-fina-3.jpg', '../assets/img/linea-fina-4.jpg', '../assets/img/linea-fina-5.jpg', '../assets/img/linea-fina-6.jpg'];

  composicionesGallery: string[] = ['../assets/img/composiciones.jpg']

  puntillismoGallery: string[] = ['../assets/img/puntillismo-arrastre.jpg', '../assets/img/puntillismo-arrastre-2.jpg']

  aquarelaGallery: string[] = [
    '../assets/img/aquarela.jpg',
    '../assets/img/aquarela-2.jpg',
    '../assets/img/aquarela-3.jpg',
    '../assets/img/aquarela-4.jpg',
    '../assets/img/aquarela-5.jpg',
    '../assets/img/aquarela-6.jpg',
    '../assets/img/aquarela-7.jpg']

  blackworkGallery: string[] = ['../assets/img/blackwork.jpg', '../assets/img/blackwork-2.jpg',]

  ngOnInit(): void {
    Aos.init();
    if (sessionStorage.getItem('entrance') === null) {
      disableScroll.on();
      this.entrance = true;
      setTimeout(() => {
        this.entrance = false;
        sessionStorage.setItem('entrance', this.entrance.toString())
        disableScroll.off();
        window.location.reload()

      }, 5000);
    }
  }

}
