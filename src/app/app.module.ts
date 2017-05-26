import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';
import { CKEditorModule } from 'ng2-ckeditor';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { ApiserviceService } from './apiservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    CKEditorModule,
    BrowserAnimationsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
