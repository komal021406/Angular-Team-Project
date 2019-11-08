import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Data } from '../resData';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resourceData = new MatTableDataSource();
  constructor(public resService: ResourceService) { }
  columnsToDisplay = ['name', 'code'];
 dataSource = this.resourceData;
result: Data[] =[];
value ='';
newRow= {'name': '', 'code': ''};
 rowForm: FormGroup;
 //visibilityFooter= "hidden";
 //displayInput = "none";
 editflag = false;


debugger
  getData(){ 
    // debugger
    return this.resService.getAllData()
    .subscribe(  result => { this.resourceData.data = result
        // Handle result
        console.log(result);
      },
      (err: any) => this.failed(err),
     ()=>{});
  }
     failed(err: any){
      console.log(err);
     }

    
     applyFilter(filterValue:string){
       this.resourceData.filter = filterValue.trim().toLowerCase();
     }

    
      initForm() {
        let rowName = '';
        let rowCode ='';
      this.rowForm = new FormGroup({
        'name': new FormControl(rowName),
        'code': new FormControl(rowCode)
    })

     }
//      addRow(){
//        this.displayInput ="block";
//       this.visibilityFooter = "visible";
       
   
// }

@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit(){
  this.resourceData.paginator = this.paginator;
}
  ngOnInit() {
    debugger
   this.getData();
   // console.log(this.getData());
  // this.initForm();
 
  }
  addRow(){
  //  alert("Hi");
    this.editflag = true;
  }

  onSubmitRow(){
    
    const newRowData = Object.assign({}, this.newRow)
    this.result.push(newRowData);
    console.log(this.result);
    this.resourceData = new MatTableDataSource(this.result);
    this.editflag = false;
    this.newRow.name='';
    this.newRow.code = '';
  }
  
}
