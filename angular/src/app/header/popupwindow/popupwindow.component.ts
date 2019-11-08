import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from "@angular/material";
import {Component, OnInit, Inject} from "@angular/core";

@Component({
    selector: 'popupwindow',
    templateUrl: './popupwindow.component.html',
})

export class PopupWindowComponent implements OnInit {

    username:string;
    userday:string;

    constructor(
        private dialogRef: MatDialogRef<PopupWindowComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.username = data.username;
        this.userday = data.userday;
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}