import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjService } from '../project.service';
import { MatTableDataSource} from '@angular/material';
import { Project } from '../../../../backend/models/project';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router'

// import {FormGroup } from ''

@Component({
  selector: 'app-proj-table',
  templateUrl: './proj-table.component.html',
  styleUrls: ['./proj-table.component.css']
})
export class ProjTableComponent implements OnInit {
  @Input() projTitle: string;
  dataSource = new MatTableDataSource<Project>();
  displayedColumns:string []=['select','name','code'];
  selection= new SelectionModel<Project>(true,[])

  constructor(public http: HttpClient, public ProjectService:ProjService) { }

  // this.ProjectService.getProject(entriesPerPage, currentPage, projTitle);
  ngOnInit() {
    // loadProject(projTitle){
    //   this.http.get()
    this.ProjectService.getProject().subscribe(res => {
      // console.log(res);
      // const response = res;
      this.dataSource = new MatTableDataSource<Project>(res.shownproject.data);
      // this.datasource = res;
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
   
  }


