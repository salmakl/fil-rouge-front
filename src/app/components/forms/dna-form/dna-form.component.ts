import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dna-form',
  templateUrl: './dna-form.component.html',
  styleUrls: ['./dna-form.component.css']
})
export class DnaFormComponent implements OnInit {

  steps:number =2;

  constructor() { }

  ngOnInit(): void {
  }

  previous(){
    this.steps--;
  }
  next(){
    this.steps++;
  }

}
