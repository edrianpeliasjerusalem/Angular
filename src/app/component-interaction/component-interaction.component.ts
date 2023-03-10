import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input("fromParentTitle") parentTitle;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  SendToParent()
  {
    this.childEvent.emit("This is from Child Component");
  }

}
