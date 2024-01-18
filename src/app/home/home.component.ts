import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

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
              <app-housing-location></app-housing-location>
            </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
