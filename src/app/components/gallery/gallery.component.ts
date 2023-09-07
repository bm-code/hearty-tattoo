import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: string[] = [
    '../../../assets/img/galeria-1.jpg',
    '../../../assets/img/galeria-2.jpg',
    '../../../assets/img/galeria-3.jpg',
    '../../../assets/img/galeria-4.jpg',
    '../../../assets/img/galeria-5.jpg',
  ]

}
