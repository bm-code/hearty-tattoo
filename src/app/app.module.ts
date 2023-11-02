import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorksComponent } from './components/works/works.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { EntranceComponent } from './components/entrance/entrance.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from './icons/icons.module';
import { MasonryGalleryComponent } from './components/masonry-gallery/masonry-gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    GalleryComponent,
    FooterComponent,
    EntranceComponent,
    SobreMiComponent,
    MasonryGalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
