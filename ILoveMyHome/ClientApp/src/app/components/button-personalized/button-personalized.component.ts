import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'button-personalized',
  templateUrl: './button-personalized.component.html',
  styleUrls: ['./button-personalized.component.scss']
})
export class ButtonPersonalizedComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public background: 'white' | 'primary' = 'primary';

  @Input()
  public size: 'big' | 'normal' = 'normal';

  constructor() { }

  ngOnInit() {
  }



}
