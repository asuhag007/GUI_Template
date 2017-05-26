import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userVar: any;
    ckeditorContent: any;
    constructor(public api:ApiserviceService) {
    }

    ngOnInit() {
        this.api.getVars().then((data) => {
            this.userVar = data;
        }, (err) => {
            console.log(err);
        });
    }

    save(form: NgForm) {
        if (form.valid) {
            this.api.saveTemp(form.value).subscribe((data) => {
                form.reset();
            }, (err) => {
                console.log(err);
            });
        }
    }

}
