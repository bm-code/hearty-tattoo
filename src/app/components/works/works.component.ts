import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  @Input() img: string = '';
  @Input() workTitle: string = '';
  @Input() title: string = '';
  @Input() tattooDescription: string = '';
  @Input() workDescription: string = '';
  @Input() direction: 'left' | 'right' = 'left';

}
