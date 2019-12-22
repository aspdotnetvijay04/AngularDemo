import { Component ,Input,OnChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-clch',
  templateUrl: './clch.component.html',
  styleUrls: ['./clch.component.css']
})
export class CLCHComponent implements OnChanges,  OnInit,DoCheck,OnDestroy {
//@Input()
public employeeForm;
public imagepath:File;
  constructor( private fb:FormBuilder) {
    console.log("this is constructor");
   }

  ngOnChanges()
  {
console.log("this ischange hook");
  }
  ngOnInit() {
    console.log("this is oninit hook");
   // console.log(this.employeeForm.value);
   this.employeeForm = this.fb.group({
    fullName: [],
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
  ngDoCheck()
  {
console.log("this is do check hook");
  }
  ngOnDestroy()
  {
    console.log("this is destroy hook");
  }

}
