import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-personalized',
  templateUrl: './button-personalized.component.html',
  styleUrls: ['./button-personalized.component.scss']
})
export class ButtonPersonalizedComponent implements OnInit {

  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
