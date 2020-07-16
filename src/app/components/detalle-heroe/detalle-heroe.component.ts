import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styles: [
  ]
})
export class DetalleHeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    this.activatedRoute.params.subscribe((parametro) => {
      // console.log('Numero Heroe: ', parametro.id);
      this.heroe = this._heroeService.conseguirHeroe(parametro.id);
    });
  }

  ngOnInit(): void {
  }

}
