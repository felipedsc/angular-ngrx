import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app-store.module';
import { fromContactList } from 'src/app/store/contact-list/contact-list.selectors';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactList$: Observable<Contact[]>;

  constructor(private store: Store<AppState>) {
    this.contactList$ = this.store.select(fromContactList.allContacts);
  }

  ngOnInit(): void {}
}
