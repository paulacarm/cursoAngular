import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CovidserviceService } from '@services/covidservice.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  public paises: any = []
  saludo ='hello'
  constructor(public api:CovidserviceService) { }

  ngOnInit(): void {
    this.api.getCountrys().subscribe(
      data=>{
        this.paises=data
        console.log(this.paises)
        console.log("tamaño",this.paises.length)
      }
    )

    
  }
itemsPerPageLabel='paises por página'
  

page_size: number=3
  page_number :number=1
  pageSizeOptions=[5,1,20,50,100]
  tam= this.paises.length

  handlePage(e: PageEvent){
    this.page_size= e.pageSize
    this.page_number= e.pageIndex + 1
  }

}
