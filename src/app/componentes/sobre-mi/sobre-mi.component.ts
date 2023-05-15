import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  public get datosPortfolio(): PortfolioService {
    return this._datosPortfolio;
  }
  public set datosPortfolio(value: PortfolioService) {
    this._datosPortfolio = value;
  }
miPortfolio:any;
  constructor(private _datosPortfolio: PortfolioService) {}

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPortfolio=data;
  });
  
}

}