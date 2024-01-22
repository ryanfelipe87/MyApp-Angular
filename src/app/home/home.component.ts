import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            HousingLocationComponent
          ],
  template:`<section>
              <form>
                <input type="text" placeholder="Filter by City">
                <button class="primary" type="button">Search</button>
              </form>
            </section>
            <section>
              <app-housing-location 
                *ngFor="let housingLocation of housingLocationList"
                [housingLocation]="housingLocation">
              </app-housing-location>
            </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = "https://angular.io/assets/images/tutorials/faa";

  housingLocationList: Housinglocation[] =[];

  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
