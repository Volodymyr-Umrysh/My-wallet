import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {BalanceService} from '../services/balance.service';
import { FormGroup } from '@angular/forms';

export interface List{
  checked: boolean;
  date: string;
  title: string;
  sum: number;
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
  s:number=0;
  sumIncome: number = 0;
  sumExpance: number = 0;
  checked: boolean;

  
  constructor(private http: HttpClient, public balance:BalanceService){

  }

  ngOnInit() {
    this.balance.getList()
    

    setTimeout(() => {
      
      this.balance.list.forEach(element => {
  
        if(element.type === 'income'){
  this.s += Number(element.sum);

  this.sumIncome += Number(element.sum);
        }else{
          this.s = this.s - Number(element.sum);
          this.sumExpance += Number(element.sum);
        }
      });
    }, 500);
  
  }

  showList(){
    if(this.balance.selectedItem.type===undefined){
      //@ts-ignore
   document.getElementById('expense').checked = true;
    }
  }

  closeModal(){
    this.closeWindow.nativeElement.click()  
}

}
