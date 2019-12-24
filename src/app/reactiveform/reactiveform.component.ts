import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, NgForm} from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
@ViewChild('empForm',null) public abcdform: FormGroup;

 public empForm:FormGroup;
 public genderlist: Array<string>=['male','female','others'];
 public languageknown:Array<string>=['hindi','English','marathi'];
 chkerror:boolean=true;
 
 public comment = new FormControl('');
public descriptionLength = new BehaviorSubject(0);
fileData: File = null;
previewUrl:any = null;
  constructor(private fb: FormBuilder) {
      this.comment.valueChanges.subscribe((v)=> this.descriptionLength.next(v.length)); }

  ngOnInit() {
    this.empForm=this.fb.group({
      name: ['',Validators.compose([Validators.required])],
      gender: ['',Validators.compose([Validators.required])],
      status:['',Validators.compose([Validators.required])],
      ln:  this.AddControls(),
     
      comment:['',Validators.compose([Validators.required])],
      image:['',Validators.compose([Validators.required])],
    });
  console.log( this.AddControls());
  }
  
  AddControls()
  {    
    return this.fb.array(this.languageknown.map(element=>
      {        
      return this.fb.control(false)
      }));  
      console.log(this.lnArray);
  }
  get lnArray()
  {
    return <FormArray>this.empForm.get('ln');
  }

      public sellist=[];
        clickchange()
        { 
          this.sellist=[];
          this.lnArray.controls.forEach((control,i=0)=>{
      if(control.value)
      {
        return  this.sellist.push(this.languageknown[i]);
      }
          })
         
        this.chkerror = this.sellist.length > 0 ? false : true;
    }
    checkcontroltouched()
    {
      let flg=false;
      this.lnArray.controls.forEach(control=>{
        if (control.touched)
        {
        flg=true;
        }
      });
     
      return flg;     
    }
    public imageview;
    handleImageFile(file:FileList)
    {
      //this.fileData = <File>fileInput.target.files[0];
       this.fileData=file.item(0);
       console.log(this.imageview);
       this.preview();
    }
    preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
    
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
      }
    }
    savealldata()
    {
      let empformstore=this.empForm.value;
      empformstore.languageknown=this.sellist;
      empformstore.comment=this.comment.value;
      empformstore.image=this.fileData.name;
      
      console.log(empformstore);
    }
    
}
