import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: Housinglocation[] = [];

  constructor() { }

  getAllHousingLocations(): Housinglocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id:number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}
