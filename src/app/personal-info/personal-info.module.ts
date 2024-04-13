import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { AngularMaterialModule } from 'src/angular-material';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [PersonalDetailsComponent, ContactComponent, AboutComponent],
  imports: [CommonModule, PersonalInfoRoutingModule, AngularMaterialModule],
})
export class PersonalInfoModule {}
