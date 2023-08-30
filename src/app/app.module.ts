import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileBoxComponent } from './components/profile-box/profile-box.component';
import { MainComponent } from './components/main/main.component';
import { AppAddButtonComponent } from './components/app-add-button/app-add-button.component';
import { AppWhiteboardComponent } from './components/app-whiteboard/app-whiteboard.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileBoxComponent,
    MainComponent,
    AppAddButtonComponent,
    AppWhiteboardComponent,
    NoteItemComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
