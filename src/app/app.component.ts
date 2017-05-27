import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { SendMailComponent } from './send-mail/send-mail.component';
import { MdSnackBar } from '@angular/material';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    userVar: any;
    ckeditorContent: any;
    allTemp: any;
    body: string;
    constructor ( public api: ApiserviceService, public snackBar: MdSnackBar, public dialog: MdDialog) {
    }

    ngOnInit() {
        this.body = 'Write Your Content here';
        this.getAllTemp();
        this.api.getVars().subscribe((data) => {
            this.userVar = data.data;
        }, (err) => {
            console.log(err);
        });
    }

    getAllTemp() {
        this.api.getAllTemps().subscribe((data) => {
            this.allTemp = data.data;
        }, (err) => {
            console.log(err);
        });
    }

    save(form: NgForm) {
        if (form.valid) {
            this.api.saveTemp(form.value).subscribe((data) => {
                form.reset();
                this.snackBar.open('Template Saved Successfully', '', {
                    duration: 2000,
                });
                this.getAllTemp();
            }, (err) => {
                console.log(err);
            });
            this.body = 'Write Your Content here';
        }
    }

    sendMail() {
       this.dialogRef = this.dialog.open(SendMailComponent);
       this.dialogRef.componentInstance.tempList = this.allTemp;
       this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

}
