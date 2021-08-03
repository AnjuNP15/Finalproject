import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CreatepostserviceService {

  item={
   PostTitle : '',
    CreatedTime : '',
    Description : '',
    Tag : '',
    Image : '',
    Author : '',
    AuthorID : '',
    Status : ''
  }
  constructor(private http:HttpClient) { }
  server_address:string='/api'


  createpost(item:any){
   return this.http.post("http://localhost:3000/createpost",{"newpost":item})
   .subscribe (data => {console.log(data)})
  }
}
