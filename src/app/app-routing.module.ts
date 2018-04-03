import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {OfferComponent} from "./offer/offer.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: []
})

export class AppRoutingModule { }
