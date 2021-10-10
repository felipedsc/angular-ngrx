import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contact } from 'src/models/contact';
import { AppState } from '../app-store.module';
import { ContactListState } from './contact-list.reducer';

export const contactListState = (state: AppState) => state.contactList;

export const allContacts = createSelector(
  contactListState,
  (state) => state.contacts
);

export const fromContactList = {
  allContacts,
};
