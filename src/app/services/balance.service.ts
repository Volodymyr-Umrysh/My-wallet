import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  checked: boolean;
  list: any[] = [];
  selectedItem: any = {};
  constructor(private http: HttpClient) {}
  getList() {
    this.http.get('http://localhost:3000/posts').subscribe((list: any[]) => this.list = list);
  }
  deleteItem(id: number) {
    this.http.delete(`http://localhost:3000/posts/${id}`)
      .subscribe(() => this.list =  this.list.filter((item: any) => item.id !== id));
  }
  updateItem(data: any) {
    this.http.put(`http://localhost:3000/posts/${data.id}`, data)
      .subscribe(() => {
        this.list = this.list.map((item) => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        });
      });
  }
  createItem(data: any) {
    this.http.post(`http://localhost:3000/posts`, data)
      .subscribe((result: any) => {
        this.list.push({...data, ...result});
      });
  }
  selectItem(item: any) {
    this.selectedItem = item;
  }
  
  // expres(){
  //   this.expression=!this.expression;
  //   console.log(this.expression);
    
  // }
}
