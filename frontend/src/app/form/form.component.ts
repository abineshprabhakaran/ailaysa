import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient } from '@angular/common/http';

interface Country {
  id: number;
  name: string;
}
interface City {
  id: number;
  name: string;
}
interface School {
  id: number;
  name: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient) { }
  countries: Country[] | undefined;
  selectedCountry: Country | undefined;

  cities: City[] | undefined;
  selectedCity: City | undefined;
  cityEnable: boolean | undefined;

  schools: School[] | undefined;
  selectedSchool: School | undefined;
  schoolEnable: boolean | undefined


  ngOnInit(): void {
    this.cityEnable = true;
    this.schoolEnable = true;
    this.http.get('http://localhost:8080/api/countries').subscribe((res: any) => {
      this.countries = res
    })
    // this.cities = [
    //   { name: 'Chennai', id: 1 },
    // ];
    // this.schools = [
    //   { name: 'Global School', id: 1 },
    // ];
  }

  countrySelect(selectedCountry: any) {
    var countryid = selectedCountry.value.id;
    this.http.get('http://localhost:8080/api/cities?' + 'countryId=' + countryid).subscribe((res: any) => {
      this.cities = res
    })
    this.cityEnable = false
  }

  citySelect(selectedCity: any) {

    var cityid = selectedCity.value.id;
    this.http.get('http://localhost:8080/api/schools?' + 'cityId=' + cityid).subscribe((res: any) => {
      this.schools = res
    })
    this.schoolEnable = false

  }

}
