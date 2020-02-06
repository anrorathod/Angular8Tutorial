import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';  
import { Country } from 'src/app/Models/Country';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-api-get-data',
  templateUrl: './api-get-data.component.html',
  styleUrls: ['./api-get-data.component.css']
})
export class ApiGetDataComponent implements OnInit {

  countries : Country[];
  constructor(private countryservice : CountryService) { }
  
  ngOnInit() {
    this.countryservice.getCountries()
      .subscribe( 
        data => {
          this.countries = data;
        }
       )
  }

}
