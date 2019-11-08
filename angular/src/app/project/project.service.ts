import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router,ActivatedRoute } from "@angular/router";

import { environment } from "../../environments/environment";
import { Project } from "../../../backend/models/Project"
import { Observable, Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl;

//for Project i to be shown
@Injectable({providedIn: 'root'})
export class ProjService{ 
    private project: Project
    private subject = new Subject<any>();
    // private projects:Array<Project.data>
    constructor(private http: HttpClient, private router: Router) {}
    // postProjects(title: string, data: Array){
    //     const project=new Project();
    //     project.title=title;
    //     project.data=data;
    //     this.http.post<{message:string; createdProject:{data:[];title:string;_id:string}}>{
    //         (BACKEND_URL, project)
    //     }
    //     .subscribe(res => {
    //         this.router.navigate(["/"]);
    //     })
    // }

    getProject (){
        // const queryParams = `?pagesize=${entriesPerPage}?page=${currentPage}`
        // entries: number; maxEntries: number
        const projId:String ="/project1";
        return this.http.get<{message: string; shownproject:{data:[];title:string;_id:string}}>(BACKEND_URL + projId)
        // .subscribe(res => {
        //     this.project = res;

        // })
        
        // (`localhost:3000/api/:projId`,)
    }
    
//   projectDataSource = new MatTableDataSource<Project>();
//   projectarray = new Array();
//   projectselect = new Array();
//   constructor(private dataService: NodeService, private titileService: TitleService) { };
//   project = null;
//   porjectChanged(event){
//     console.log(event);
//     console.log(this.project);
//     this.projectDataSource.filter = this.project;
//     // this.titileService.changeMessage(this.project);
//     this.getData();
//   }
    
}