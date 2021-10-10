import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import * as ContactListActions from 'src/app/store/contact-list/contact-list.actions';
import { ContactListState } from 'src/app/store/contact-list/contact-list.reducer';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  form: IFormGroup<Contact>;
  formBuilder: IFormBuilder;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ contactList: ContactListState }>
  ) {
    this.formBuilder = fb;

    this.form = this.formBuilder.group<Contact>({
      name: '',
      phoneNumber: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    debugger;
    if (this.form.valid && this.form.value) {
      this.store.dispatch(ContactListActions.add(this.form.value));
      this.form.reset();
    }
  }
}
