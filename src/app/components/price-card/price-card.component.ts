import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  @Input() price:number=120;

  constructor() { }

  ngOnInit(): void {
  }

}
