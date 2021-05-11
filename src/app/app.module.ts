import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbLayoutModule,
  NbThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbTabsetModule,
  NbActionsModule,
  NbButtonGroupModule,
  NbIconModule,
  NbFormFieldModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionComponent } from './collection/collection.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, BookmarkComponent, CollectionComponent],
  imports: [
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbButtonGroupModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
