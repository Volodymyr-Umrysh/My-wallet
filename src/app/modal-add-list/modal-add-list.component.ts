import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-list',
  templateUrl: './modal-add-list.component.html',
  styleUrls: ['./modal-add-list.component.scss']
})



export class ModalAddListComponent implements OnInit {
 @ViewChild("closeWindow", {static:false}) closeWindow:ElementRef;
 
  form: FormGroup;



  title:string;
  sum: number;
  date:string;
  type:string;
  constructor(private http: HttpClient){

  }
  

  ngOnInit():void {
this.form=new FormGroup({
 
  date: new FormControl('',Validators.required ),
  title: new FormControl('',Validators.required ),
  sum: new FormControl(null,Validators.required)
})
  }

  addList(){
  

    this.http.post('http://localhost:3000/posts', {
      title:this.title, 
      sum:+this.sum, 
      date:this.date, 
      type:this.type})
    .subscribe((res) => console.log(res))
    this.form.reset()
  

  
  }
  closeModal(){
    this.closeWindow.nativeElement.click()
}
}
