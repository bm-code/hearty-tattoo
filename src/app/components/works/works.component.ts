import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import 'slick-carousel';
import AOS from 'aos';
import { AosOptions } from 'aos';



@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }


  @Input() img: string[] = [];
  @Input() workTitle: string = '';
  @Input() title: string = '';
  @Input() tattooDescription: string = '';
  @Input() workDescription: string = '';
  @Input() direction: 'left' | 'right' = 'left';
  currentImageIndex: number = 0;
  loadedImages: number = 0;
  interval: any;

  options: AosOptions = {
    duration: 1000,
  }


  ngOnInit() {
    this.preloadImages();
    this.startSlider();
    AOS.init();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  preloadImages() {
    for (let i = 0; i < this.img.length; i++) {
      const image = new Image();
      image.src = this.img[i];
      image.onload = () => {
        this.loadedImages++;
        if (this.loadedImages === this.img.length) {
          this.showSlider();
        }
      };
    }
  }

  showSlider() {
    const sliderElement = this.elementRef.nativeElement.querySelector('.slider');
    sliderElement.style.visibility = 'visible';
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 2000); // Cambia las imágenes cada 3 segundos (ajusta el valor según tus necesidades)
  }

  stopSlider() {
    clearInterval(this.interval);
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.img.length;
  }

  showPreviousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.img.length) % this.img.length;
  }



}
