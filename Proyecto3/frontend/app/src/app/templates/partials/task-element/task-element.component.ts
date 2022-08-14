import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css'],
})
export class TaskElementComponent implements OnInit {
  @Input() "title": string; //titulo de la tarea
  @Input() "id": number; //id
  @Input() "date": string; //fecha limite
  @Input() "body": string; // cuerpo
  @Input() "type": string; // tipo por defecto primary

  /**
   * @Input() "title": string; //titulo de la tarea
   * @Input() "id": string; //id
   * @Input() "date": string; //fecha limite
   */
  constructor() {
    this.type = "primary"; //default primary
  }

  ngOnInit(): void {}
}
