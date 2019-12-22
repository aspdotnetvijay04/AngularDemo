import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { employeemodel } from '../model/employeemodel.model';
import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(private empservice:EmpserviceService, private router:Router) { }
  private employees = [];
  private employees1:employeemodel[] = [];

  ngOnInit() {
   
  }
  getvalue(formng:NgForm) {
    this.empservice.getEmployee().subscribe((res : employeemodel[])=>{     
      this.employees1=res;
      if(this.employees1.filter(a=>a.name==formng.controls['name'].value , a=>a.email==formng.controls['email'].value  ).length>0)
      {
      this.router.navigateByUrl('/employee');
      }      
      else
      {
      err=>console.error();
      }
      
      
      console.log(this.employees1.filter(a=>a.name==formng.controls['name'].value , a=>a.email==formng.controls['email'].value  ));
    });
  }

}
