import { Action, createReducer, on } from '@ngrx/store';
import { Contact } from 'src/models/contact';
import * as ContactListActions from './contact-list.actions';

export interface ContactListState {
  name: string;
  contacts: Contact[];
}

const initialState: ContactListState = {
  name: 'My Contact List',
  contacts: [],
};

function addContact(
  state: ContactListState,
  newContact: Contact
): ContactListState {
  return {
    ...state,
    contacts: [...state.contacts, newContact],
  };
}

const _contactListReducer = createReducer(
  initialState,
  on(ContactListActions.add, addContact)
);

export function contactListReducer(
  state: ContactListState | undefined,
  action: Action
) {
  return _contactListReducer(state, action);
}
