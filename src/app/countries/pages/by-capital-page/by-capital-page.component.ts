import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string) {
    this.countriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
