import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LottoService } from './lotto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LottoService]
})
export class AppComponent {
  title = 'Welcome to my first angular app!';
  data: any;
  error: any;
  showCalc: Boolean = false;
  stateName = "Alaska"
  stateTax = 0;


  states: any[] = [
    {state : "Alaska", rate	: 0.00},
    {state : "Arizona", rate	: 5.00},
    {state : "Arkansas", rate : 7.00},
    {state : "California", rate : 0.00},
    {state : "Colorado", rate : 4.00},
    {state : "Connecticut", rate : 6.50},
    {state : "Delaware", rate : 0.00},
    {state : "Georgia", rate : 6.00},
    {state : "Idaho", rate : 7.80},
    {state : "Illinois", rate : 5.00},
    {state : "Indiana", rate : 3.40},
    {state : "Iowa", rate : 5.00},
    {state : "Kansas", rate : 5.00},
    {state : "Kentucky", rate : 6.00},
    {state : "Louisiana", rate : 5.00},
    {state : "Maine", rate : 5.00},
    {state : "Maryland", rate : 7.75},
    {state : "Massachusettes", rate : 5.00},
    {state : "Michigan", rate : 4.35},
    {state : "Minnesota", rate : 7.25},
    {state : "Missouri", rate : 4.00},
    {state : "Montana", rate: 10.00},
    {state : "Nebraska", rate : 5.00},
    {state : "New Hampshire", rate: 10.00},
    {state : "New Jersey", rate : 3.00},
    {state : "New Mexico", rate : 6.00},
    {state : "New York", rate : 8.82},
    {state : "North Carolina", rate : 7.00},
    {state : "North Dakota", rate : 5.54},
    {state : "Ohio", rate : 6.00},
    {state : "Oklahoma", rate : 4.00},
    {state : "Oregon", rate : 8.00},
    {state : "Pennsylvania", rate : 0.00},
    {state : "Rhode Island", rate : 7.00},
    {state : "South Carolina", rate : 7.00},
    {state : "South Dakota", rate : 0.00},
    {state : "Tennessee", rate : 0.00},
    {state : "Texas", rate : 0.00},
    {state : "Vermont", rate : 6.00},
    {state : "Virginia", rate : 4.00},
    {state : "Washington", rate : 0.00},
    {state : "Washington D.C.", rate : 8.50},
    {state : "West Virginia", rate : 6.00},
    {state : "Wisconsin", rate : 7.75}
  ]

    stateTaxes = {
      "Alaska" : 0.00,
      "Arizona" :  5.00,
      "Arkansas" : 7.00,
      "California" : 0.00,
      "Colorado" : 4.00,
      "Connecticut" : 6.50,
      "Delaware" : 0.00,
      "Georgia" : 6.00,
      "Idaho" : 7.80,
      "Illinois" : 5.00,
      "Indiana" : 3.40,
      "Iowa" : 5.00,
      "Kansas" : 5.00,
      "Kentucky" : 6.00,
      "Louisiana" : 5.00,
      "Maine" : 5.00,
      "Maryland" : 7.75,
      "Massachusettes" : 5.00,
      "Michigan" : 4.35,
      "Minnesota" : 7.25,
      "Missouri" : 4.00,
      "Montana" : 10.00,
      "Nebraska" : 5.00,
      "New Hampshire" : 10.00,
      "New Jersey" : 3.00,
      "New Mexico" : 6.00,
      "New York" : 8.82,
      "North Carolina" : 7.00,
      "North Dakota" : 5.54,
      "Ohio" : 6.00,
      "Oklahoma" : 4.00,
      "Oregon" : 8.00,
      "Pennsylvania" : 0.00,
      "Rhode Island" : 7.00,
      "South Carolina" : 7.00,
      "South Dakota" : 0.00,
      "Tennessee" : 0.00,
      "Texas" : 0.00,
      "Vermont" : 6.00,
      "Virginia" : 4.00,
      "Washington" : 0.00,
      "Washington D.C." : 8.50,
      "West Virginia" : 6.00,
      "Wisconsin"  : 7.7
      }

  constructor(private lottoService: LottoService) { }

  ngOnInit() {
    this.lottoService.getData()
    .subscribe(
      data => {
        this.data = data;
        data.megaLump = 3;
        data.powerLump=3;
      },
      error => { this.error = error; }
      ); 
  }

  stateChanged(valState) {
    console.log(valState)
    console.log(this.stateTaxes[valState])
    this.stateName = "valState"
    this.stateTax = this.stateTaxes[valState];

  }

  showCalculations() {
    this.showCalc = true;
  }


}
