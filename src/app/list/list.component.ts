import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {BalanceService} from '../services/balance.service';

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


  constructor(private http: HttpClient, public balance:BalanceService){
console.log(this.balance)
  }
  

  ngOnInit() {
   
    this.balance.getList()
  }



}
