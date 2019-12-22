import { Component, OnInit } from '@angular/core';
import {employeemodel} from '../model/employeemodel.model';
import{EmpserviceService} from '../empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(private empservice:EmpserviceService) { }
  private employees = [];
  private employees1:employeemodel[] = [];
  ngOnInit() {
    this.empservice.getEmployee().subscribe((res : employeemodel[])=>{     
      this.employees1=res;
    });
     this.empservice.get_products().subscribe(
       (res : any[])=>{
      this.employees = res;
      console.log(this.employees);
  }
  //err=>console.log(err)
  );
  
  }
   
  deleteemp(event:number):void
  {
this.empservice.Delete_products(event).subscribe
(
()=>console.log(event),
(err)=>console.error()
)
}
  
}
