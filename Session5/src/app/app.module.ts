import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalerService } from './core/services/localer.service';

import { AppComponent } from './app.component';
import { LimmitPipe } from './core/pipes/limmit.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LimmitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
