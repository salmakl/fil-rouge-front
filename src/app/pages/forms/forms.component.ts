import { Component, OnInit } from '@angular/core';
import { LogoDesignService } from 'src/app/services/logo-design.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  step: number = 1;
  constructor(private logoService:LogoDesignService,private router:Router) { }

  ngOnInit(): void {
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  handleDesign() {

    this.router.navigate(['/checkout']);

    // console.log(localStorage.getItem('designId'))
    // this.logoService.saveLogoDesign({
    //   designId: localStorage.getItem('designId') ?? '11B',
    //   logodesign: localStorage.getItem('brandName') ?? '',
    //   langue: localStorage.getItem('langue') ?? '',
    //   image: localStorage.getItem('image') ?? '',
    //   dna: localStorage.getItem('dna') ?? '',
    //   type: localStorage.getItem('type') ?? '',
      
    // }).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigate(['/checkout']);
    //   }
    // )
  }
}
