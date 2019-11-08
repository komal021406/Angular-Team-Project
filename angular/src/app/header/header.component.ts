import { Component, Inject, OnInit } from '@angular/core';
import {TitleService } from '../title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [TitleService]
})
export class HeaderComponent implements OnInit {
    project: string;
    constructor(private titleService: TitleService){}
    ngOnInit(){
      // this.titleService.currentMessage.subscribe(message =>this.project=message);
    }
    // ngOnChange(){
    //   console.log(this.project);
    // }
  }