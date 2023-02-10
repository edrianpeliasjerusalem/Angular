import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bindings',
  templateUrl: './event-bindings.component.html',
  styleUrls: ['./event-bindings.component.css']
})
export class EventBindingsComponent implements OnInit {

  public clickValue = "";
  public greet = "";

  constructor() { }

  ngOnInit() {
  }

  GreetClick()  {
    this.greet = "Welcome!";
  }

}
