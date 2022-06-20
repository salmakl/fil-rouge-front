import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() name:String="";
  @Input() email:String="";
  
  constructor() { }

  ngOnInit(): void {
  }

}
