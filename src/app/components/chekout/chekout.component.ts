import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      designId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      company: new FormControl(''),

  })
  }

  onSubmit(form: FormGroup) {
    form.patchValue({designId: localStorage.getItem('designId') ?? '11B'});
    form.get("designId")?.updateValueAndValidity();
    this.orderService.createOrder(form.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
