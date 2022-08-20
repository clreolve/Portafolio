import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.css']
})
export class GroupElementComponent implements OnInit {

  @Input() "title": string; //titulo de la tarea
  @Input() "id": number; //id
  @Input() "tasks": Object; //tareas

  constructor() { }

  ngOnInit(): void {
  }

}
