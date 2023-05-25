import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images: string[] = [
    'https://picsum.photos/730/510?random',
    'https://picsum.photos/730/510?random',
    'https://picsum.photos/730/510?random',
    'https://picsum.photos/730/510?random',
    'https://picsum.photos/730/510?random',
    'https://picsum.photos/730/510?random',
  ]

}
