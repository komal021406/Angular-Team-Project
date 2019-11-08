import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from '../resData';
//import {map} from 'rxjs/operators';
@Injectable()
export class ResourceService {
  private APIUrl = 'http://localhost:3000/api/resource';
  private result :Data[]= []


  constructor(private http: HttpClient) { }
  //getAllData(): Observable<data[]>{

  getAllData(): Observable<Data[]>{
    debugger

      return this.http.get<Data[]>(this.APIUrl)
    //  .pipe(map((response:any)=> response.json()));
    }
  // getAllData(): Observable<data[]>{
  //   return this.http.get<data[]>(this.APIUrl)
  //   .map((response:Response)=> {response.json()});
  //   console.log(this.APIUrl);
  // }

  addNewRow(newRowData){
    let headers = new Headers({'Content-Type': 'application/json'});
 //   let options = new RequestOptions({headers: headers});
    return this.http.post(this.APIUrl, newRowData);

    
 }
}
