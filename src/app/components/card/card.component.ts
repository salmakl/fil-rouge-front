import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title:string = "";
  @Input() icon:string = "";


  constructor() { }

  ngOnInit(): void {
  }

  handle(title:string) {
    console.log(title);
    localStorage.setItem('type',this.title);
  }
}
