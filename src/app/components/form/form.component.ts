import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title:string = "";
  @Input() placeholder:string = "";
  @Input() name:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  handleInput(event:any) {
    console.log(this.name);
    console.log(event.target.value);
    localStorage.setItem(this.name, event.target.value);
  }


}
