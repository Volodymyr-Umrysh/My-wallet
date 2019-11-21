import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-modal-add-list',
  templateUrl: './modal-add-list.component.html',
  styleUrls: ['./modal-add-list.component.scss']
})


export class ModalAddListComponent implements OnInit {
 
  title =''
  sum= ''
  date=''
  type="income"
  constructor(private http: HttpClient){

  }
  

  ngOnInit() {

  }

  ngDoCheck(){
  }

  addList(){
    this.http.post('http://localhost:3000/posts', {title:this.title, sum:this.sum, date:this.date, type:this.type})
    .subscribe((res) => console.log(res))
  }

}
