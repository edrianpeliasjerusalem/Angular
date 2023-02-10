import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public id = "lblName"
  public isDisabled = true;
  public successClass = "text-success";
  public isError = true;
  public isItalic = true;
  public errorMsg = {
    "text-danger": this.isError,
    "text-success": !this.isError,
    "text-italic": this.isItalic
  }
  // cannot use hypen, use CamelCase
  public titleStyle = {
    color: "orange",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
