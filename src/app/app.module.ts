import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdCardModule, MdSnackBarModule, MdDialogModule, MdIconModule, MdSelectModule, MdProgressSpinnerModule } from '@angular/material';
import { CKEditorModule } from 'ng2-ckeditor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ApiserviceService } from './apiservice.service';
import { SendMailComponent } from './send-mail/send-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule,
    MdIconModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    CKEditorModule,
    BrowserAnimationsModule
  ],
  providers: [ApiserviceService],
  entryComponents: [
    SendMailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
