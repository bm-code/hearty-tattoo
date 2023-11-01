import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry-gallery',
  templateUrl: './masonry-gallery.component.html',
  styleUrls: ['./masonry-gallery.component.scss']
})
export class MasonryGalleryComponent {

  constructor() { }

  initialImageCount: number = 16;

  images: string[] = [
    '../../../assets/img/masonry/ms-0.jpg',
    '../../../assets/img/masonry/ms-15.jpg',
    '../../../assets/img/masonry/ms-6.jpg',
    '../../../assets/img/masonry/ms-16.jpg',
    '../../../assets/img/masonry/ms-17.jpg',
    '../../../assets/img/masonry/ms-48.jpg',
    '../../../assets/img/masonry/ms-18.jpg',
    '../../../assets/img/masonry/ms-49.jpg',
    '../../../assets/img/masonry/ms-10.jpg',
    '../../../assets/img/masonry/ms-11.jpg',
    '../../../assets/img/galeria-5.jpg',
    '../../../assets/img/masonry/ms-19.jpg',
    '../../../assets/img/masonry/ms-20.jpg',
    '../../../assets/img/galeria-3.jpg',
    '../../../assets/img/masonry/ms-4.jpg',
    '../../../assets/img/masonry/ms-45.jpg',
    '../../../assets/img/masonry/ms-5.jpg',
    '../../../assets/img/galeria-4.jpg',
    '../../../assets/img/masonry/ms-7.jpg',
    '../../../assets/img/masonry/ms-9.jpg',
    '../../../assets/img/galeria-1.jpg',
    '../../../assets/img/galeria-2.jpg',
    '../../../assets/img/masonry/ms-1.jpg',
    '../../../assets/img/masonry/ms-2.jpg',
    '../../../assets/img/masonry/ms-21.jpg',
    '../../../assets/img/masonry/ms-41.jpg',
    '../../../assets/img/masonry/ms-22.jpg',
    '../../../assets/img/masonry/ms-40.jpg',
    '../../../assets/img/masonry/ms-23.jpg',
    '../../../assets/img/masonry/ms-24.jpg',
    '../../../assets/img/masonry/ms-25.jpg',
    '../../../assets/img/masonry/ms-26.jpg',
    '../../../assets/img/masonry/ms-34.jpg',
    '../../../assets/img/masonry/ms-27.jpg',
    '../../../assets/img/masonry/ms-28.jpg',
    '../../../assets/img/masonry/ms-30.jpg',
    '../../../assets/img/masonry/ms-32.jpg',
    '../../../assets/img/masonry/ms-33.jpg',
    '../../../assets/img/masonry/ms-35.jpg',
    '../../../assets/img/masonry/ms-36.jpg',
    '../../../assets/img/masonry/ms-37.jpg',
    '../../../assets/img/masonry/ms-38.jpg',
    '../../../assets/img/masonry/ms-39.jpg',
    '../../../assets/img/masonry/ms-42.jpg',
    '../../../assets/img/masonry/ms-43.jpg',
    '../../../assets/img/masonry/ms-44.jpg',
    '../../../assets/img/masonry/ms-46.jpg',
    '../../../assets/img/masonry/ms-47.jpg',
    '../../../assets/img/masonry/ms-50.jpg',
    '../../../assets/img/masonry/ms-51.jpg',
    '../../../assets/img/masonry/ms-52.jpg',

  ]

  randomImages: string[] = this.shuffleImages(this.images)

  showModal = false;
  selectedImage: string | null = null;

  openModal(image: string) {
    this.selectedImage = image;
    this.showModal = true;
  }

  closeModal() {
    this.selectedImage = null;
    this.showModal = false;
  }

  showMoreImages() {
    this.initialImageCount += 25;
  }

  shuffleImages(array: string[]): string[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

}