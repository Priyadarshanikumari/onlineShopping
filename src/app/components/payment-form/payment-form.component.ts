import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent  implements OnInit {
  paymentForm!: FormGroup;
  constructor(private fb: FormBuilder,private paymentService: PaymentService,private snackBar:MatSnackBar,private router: Router){}
  ngOnInit(): void {
    this.paymentForm=this.fb.group({
      cardNumber:['',[Validators.required]],
      expirationDate:['',[Validators.required]],
      cvc:['',[Validators.required]],

    })
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = {
        cardNumber: this.paymentForm.value.cardNumber,
        expiryDate: this.paymentForm.value.expiryDate,
        cvc: this.paymentForm.value.cvc
      };
      this.paymentService.processPayment(paymentData).subscribe(
        response => {
          this.snackBar.open('Payement successful!', 'Success',{
            duration: 3000,
          });
          this.router.navigate(['/home']);
        },
        error => {
          this.snackBar.open('Payment Failed', 'Error',{
            duration: 3000,
          });
        }
      );
    }

  }


}
