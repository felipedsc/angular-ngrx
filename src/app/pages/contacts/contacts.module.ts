import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [ContactsComponent, NewContactComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: []
})
export class ContactsModule {}
