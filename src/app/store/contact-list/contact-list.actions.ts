import { createAction, props } from '@ngrx/store';
import { Contact } from 'src/models/contact';

export const add = createAction('[Contact List] Add', props<Contact>());
