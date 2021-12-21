import { Component, OnInit, Input } from '@angular/core';
import { Cachorro } from '../module/cachorro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cachorro: Cachorro;

  constructor() { }

  cachorros: Cachorro[];

  ngOnInit(): void {
  }

}
