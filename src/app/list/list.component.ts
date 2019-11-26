import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {BalanceService} from '../services/balance.service';
import { FormGroup } from '@angular/forms';

export interface List{
  checked: boolean;
  date: string
  title: string
  sum: number
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @ViewChild("closeWindow", {static:false}) closeWindow:ElementRef;
  form: FormGroup;
  search:'';
 
  
  constructor(private http: HttpClient, public balance:BalanceService){
console.log(this.balance)
  }
  

  ngOnInit() {
   
    this.balance.getList()
  }

  closeModal(){
    this.closeWindow.nativeElement.click()
}

}
