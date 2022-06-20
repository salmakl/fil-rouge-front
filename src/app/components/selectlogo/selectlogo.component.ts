import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectlogo',
  templateUrl: './selectlogo.component.html',
  styleUrls: ['./selectlogo.component.css']
})
export class SelectlogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(event:any) {
    console.log(event.target.value);
    localStorage.setItem("logo", event.target.value); 
  }
}
