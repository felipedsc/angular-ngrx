import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { CounterComponent } from '../pages/counter/counter.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'contacts/new',
    component: NewContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
