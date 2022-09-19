import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css'],
})
export class CarditemComponent implements OnInit {
  @Input()
  foo: string = 'bar';

  @Input()
  name: string = 'producto sin nombre';

  @Input()
  infouri: string = '';

  @Input()
  price: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
