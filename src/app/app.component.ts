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


}
