import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

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
      this.heroe = this._heroeService.conseguirHeroe(parametro.id);
    });
  }

  ngOnInit(): void {
  }

}
