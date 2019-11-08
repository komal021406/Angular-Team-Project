import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {Project} from './project.model';

@Injectable()
export class NodeService {
    private subject = new Subject<any>();
    constructor(private http: HttpClient){ }
    projects: Project[]=[];
    private APIUrl = 'http://localhost:3000/api/resources';
    getFiles(){
        if(localStorage.getItem('myproject')==undefined){
            this.http.get('/assets/project.json')
            .subscribe(res=>{
                this.projects = res as Project[];
                localStorage.setItem('myproject', JSON.stringify(this.projects));
            });
        }
        return this.projects = JSON.parse(localStorage.getItem('myproject'));
    }
    getProject() {
        this.getFiles();
        console.log(this.projects);
        return this.projects;
    }
    getAllData(): Observable<Project[]>{
        return this.http.get<Project[]>(this.APIUrl)
      //  .pipe(map((response:any)=> response.json()));
      }
    postPorject(){
        
    }
}