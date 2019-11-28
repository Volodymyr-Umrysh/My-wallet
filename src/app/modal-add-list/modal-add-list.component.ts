import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {BalanceService} from '../services/balance.service';

@Component({
  selector: 'app-modal-add-list',
  templateUrl: './modal-add-list.component.html',
  styleUrls: ['./modal-add-list.component.scss'],
})



export class ModalAddListComponent implements OnInit {
 @ViewChild("closeWindow", {static:false}) closeWindow:ElementRef;
 form: FormGroup;
 show: any;
 constructor(public balance: BalanceService) { }

 ngOnInit() {
    this.form=new FormGroup({
 
        date: new FormControl('',Validators.required ),
        title: new FormControl('',Validators.required ),
        sum: new FormControl(null,Validators.required)
      })
 }

 submit() {
   if (this.balance.selectedItem.id) {
     this.balance.updateItem(this.balance.selectedItem);
   } else {
     this.balance.createItem(this.balance.selectedItem);
   }
   this.balance.selectItem({});
   this.form.reset()
 }

 closeModal(){
    this.closeWindow.nativeElement.click()
}
showBorder(){
  this.show=!this.show;
}
}