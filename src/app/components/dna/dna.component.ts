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

  handleInput(event:any) {
  if (event.target.value<50 ) 
  {
    console.log(this.choice1);
    localStorage.setItem(this.choice1, "true");
  }else{
    console.log(this.choice2);
    localStorage.setItem(this.choice2, "true");
  }
}
}
