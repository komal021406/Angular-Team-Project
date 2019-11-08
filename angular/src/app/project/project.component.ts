import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjTableComponent } from './proj-table/proj-table.component';
import { ResourceService } from '../services/resource.service';
import { MatTableDataSource } from '@angular/material';
import { Resource } from '../../../backend/models/resource';
import { SelectionModel } from '@angular/cdk/collections';
// import { ProjectService } from './project.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // providers: [
  //   {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  // ]
  @ViewChild(ProjTableComponent) child: ProjTableComponent;
  dataSource=new MatTableDataSource<Resource>();
  displayedColumns:string []= ['select','name','code']  
  selection= new SelectionModel<Resource>(true,[])
  project;
  projectselect=["project1","project2","project3"]
  constructor(public http: HttpClient, public ResourceService:ResourceService){}

  ngOnInit(){
    this.ResourceService.getAllData().subscribe(res => {
      // console.log(res)
      this.dataSource = new MatTableDataSource<Resource>(res)
    })
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  // exportProject(projTitle){
  //   title=this.projectTitle
  //   Selection.data
  //   this.http.post<{message:string; createdProject:{data:[];title:string;_id:string}}>{

  //   }
  // }
}
