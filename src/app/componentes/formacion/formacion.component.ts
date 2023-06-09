import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit{
  educationList:any;
  constructor(private datosPortfolio:PortfolioService) {}

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(datosPortfolio => {
    this.educationList=datosPortfolio.education;
  })
}
}
