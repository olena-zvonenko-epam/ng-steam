import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: number;
  @Input() overview!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
