import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() boxTitle: string="";
  @Input() boxContent: string="";
  @Input() image: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
