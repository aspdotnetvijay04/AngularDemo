import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employeemodel } from '../model/employeemodel.model';

@Component({
  selector: 'app-displaydetail',
  templateUrl: './displaydetail.component.html',
  styleUrls: ['./displaydetail.component.css']
})
export class DisplaydetailComponent implements OnInit {

  employee:any=[];
  constructor(private empservice:EmpserviceService,private route:ActivatedRoute,private router:Router) { }
 
public _id:number;
  ngOnInit() {
    //we use for singal instance of data to get
  //  const id1= +this.route.snapshot.paramMap.get('id');
  // return this.empservice.getbyid(id1).subscribe(
  //   (res)=>{
  //     this.employee=res;   
  //   }
  // );

  this.route.paramMap.subscribe(params => {
    this._id = +params.get('id');
    this.employee = this.empservice.getbyid(this._id);
  });
  }

  nextemp(id:number)
  {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this.router.navigate(['/details', this._id]);
  }
  
}
