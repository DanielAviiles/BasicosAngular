import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (parametros) => {
      this.heroes = this._heroesService.buscarHeroes(parametros['termino']);
    });
  }

}
