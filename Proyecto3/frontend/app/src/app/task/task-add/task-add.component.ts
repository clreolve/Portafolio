import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/scripts.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private _scripts:ScriptsService) { 
    _scripts.load(
      [
        "taskadd.js"
      ]
    )
  }

  ngOnInit(): void {
  }

}
