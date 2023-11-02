import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: string[] = [
    '../../../assets/img/camiseta.jpg',
    '../../../assets/img/camiseta2.jpg',
    '../../../assets/img/camiseta3.jpg',
    '../../../assets/img/camiseta4.jpg',
    '../../../assets/img/camiseta5.jpg',
    '../../../assets/img/camiseta6.jpg',
    '../../../assets/img/camiseta7.jpg',
    '../../../assets/img/camiseta8.jpg',
    '../../../assets/img/camiseta9.jpg',
    '../../../assets/img/camiseta10.jpg',
    '../../../assets/img/camiseta11.jpg',
  ]

}
