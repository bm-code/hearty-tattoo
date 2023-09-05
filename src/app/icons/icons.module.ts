import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Instagram, Phone, Mail, MapPin } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Instagram,
  Phone,
  Mail,
  MapPin
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
