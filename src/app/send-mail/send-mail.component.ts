import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ApiserviceService } from '../apiservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  tempList: any;
  spin: boolean;
  constructor (public dialogRef: MdDialogRef<any>, public api: ApiserviceService) {

  }

  ngOnInit() {
    this.dialogRef.updateSize('20%', '40%');
    this.spin = false;
  }

  send(form: NgForm) {
    if (form.valid) {
        this.spin = true;
        this.api.sendEmail(form.value).subscribe((data) => {
            this.spin = false;
            this.dialogRef.close();
        }, (err) => {
            console.log(err);
            this.spin = false;
        });
    }
  }

  close() {
    this.dialogRef.close();
  }

}
