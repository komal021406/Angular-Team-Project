import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NodeService } from "../project.services";
import { Observable } from 'rxjs';
import { Project } from '../project.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TitleService } from '../title.service';

export interface Project {
  projectName: string;
  Data:Data;
}
export interface Data{
  name: string;
  code: number;
}

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css'],
  providers: [NodeService,TitleService]
})
export class FormulaComponent implements OnInit {

  displayedColumns: string[] = ['NAME', 'COST_CODE', 'EDITABLE', 'ITEM_ID'];
  // dataSource = new MatTableDataSource<Project>();
  projectDataSource = new MatTableDataSource<Project>();
  projectarray = new Array();
  projectselect = new Array();
  constructor(private dataService: NodeService, private titileService: TitleService) { };
  project = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  porjectChanged(event){
    console.log(event);
    console.log(this.project);
    this.projectDataSource.filter = this.project;
    // this.titileService.changeMessage(this.project);
    this.getData();
  }
  
  getData(){
      return this.dataService.getAllData()
      .subscribe( result =>{
        this.projectDataSource = new MatTableDataSource<Project>(result);
        this.projectDataSource.filter=this.project;
        this.projectarray = result;
        for( let peoj of this.projectarray){
          let title = peoj.title;
          if(this.projectselect.indexOf(title)==-1){
            this.projectselect.push(title);
          }
        }
        // this.projectselect = result;
        console.log(this.projectselect);
        console.log(this.projectarray.filter(proj => proj.title==="Project2"));
      },
      (err: any) => this.failed(err),
      ()=>{});
  }
  failed(err: any){
    console.log(err);
   }
  onSubmit(){

  }

  ngAfterViewInit(){
    // this.projectDataSource.paginator = this.paginator;
  }
  ngOnInit(){ 
    // this.titileService.currentMessage.subscribe(message =>this.project = message);
    this.projectDataSource.filter = this.project;
    this.projectDataSource.paginator = this.paginator;
    // const dataSource1 = this.dataService.getProject();
    // const projects = this.dataService.getAllData();
    // this.dataSource = new MatTableDataSource<Project>(dataSource1)
    this.getData();
    // this.projectarray = this.projectDataSource.filteredData;
    console.log(this.projectDataSource);
    // this.titileService.currentMessage.subscribe(msg=>console.log(msg));
    // console.log(this.dataSource.filteredData);
  }
}