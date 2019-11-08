import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs'

@Injectable()
export class TitleService{
    private messageSource = new BehaviorSubject('All Projects');
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message)
        console.log(message);
    }
}
