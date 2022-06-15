import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dna',
  templateUrl: './dna.component.html',
  styleUrls: ['./dna.component.css']
})
export class DnaComponent implements OnInit {

  @Input() choice1:string = "";
  @Input() choice2:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
