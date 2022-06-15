import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title:string = "";
  @Input() placeholder:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
