import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';
import {employeemodel} from './model/employeemodel.model';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  public myurl='http://localhost:3000/employees';
  constructor( private httpservice:HttpClient) {

  
   }
   getEmployee():Observable<employeemodel[]>
   {
     //D:\angproj\src\assets\db.json
     //http://localhost:3001/employees
     
     return this.httpservice.get<employeemodel[]>('http://localhost:3000/employees');
   };
   
                   get_products(){
                 return this.httpservice.get('http://localhost:3000/employees');
                  }

                  Delete_products(id:number):Observable<void>{
                    return this.httpservice.delete<void>('http://localhost:3000/employees/'+id);
                    }
                    getbyid(id:number):Observable<employeemodel[]>
                    {
                      
                     return this.httpservice.get<employeemodel[]>(`${this.myurl}/${id}`)
                    }
}
