import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list:[]

  constructor(private http: HttpClient){

  }
  

  ngOnInit() {
    this.http.get('http://localhost:3000/posts').subscribe((list:[]) => this.list = list)
  }

  onDelete(id){
    this.http.delete(`http://localhost:3000/posts/${id}`).subscribe((list:[]) => this.list = list)
  }

  onEdit(id){
    this.http.get(`http://localhost:3000/posts/${id}`).subscribe((res) => res)
  }

}
