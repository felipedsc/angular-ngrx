import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './pages/counter/counter.component';
import { AppStoreModule } from './store/app-store.module';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';
import { ContactsModule } from './pages/contacts/contacts.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule, ContactsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
