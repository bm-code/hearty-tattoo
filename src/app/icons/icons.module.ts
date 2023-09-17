import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Instagram, Phone, Mail, MapPin,ArrowDown, XCircle } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowDown,
  XCircle
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
