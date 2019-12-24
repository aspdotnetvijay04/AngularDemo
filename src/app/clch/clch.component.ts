import { Component ,Input,OnChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-clch',
  templateUrl: './clch.component.html',
  styleUrls: ['./clch.component.css']
})
export class CLCHComponent implements   OnInit {
//@Input()
public employeeForm;
public imagepath:File;
  constructor( private fb:FormBuilder) {
    console.log("this is constructor");
   }
  ngOnInit() {
    console.log("this is oninit hook");
   // console.log(this.employeeForm.value);
   this.employeeForm = this.fb.group({
    fullName: ['',Validators.compose([Validators.required])],
    email: [],
    image:[],
    skills: this.fb.group({
      skillName: [],
      experienceInYears: [],
      proficiency: []
    })
  });
  console.log(this.employeeForm);
  }
  onSubmit(): void {
    console.log(this.employeeForm.value);
    let empformlist=this.employeeForm.value;
    empformlist.image=this.imagepath
    console.log(empformlist.value);
  }
  onhandle(file:FileList)
  {
this.imagepath=file.item(0);
  }
  

}
