import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  contactListReducer,
  ContactListState,
} from './contact-list/contact-list.reducer';
import { counterReducer } from './counter/counter.reducer';

export interface AppState {
  count: number;
  contactList: ContactListState;
}

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot<AppState>({
      count: counterReducer,
      contactList: contactListReducer,
    }),
  ],
})
export class AppStoreModule {}
