import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    if (termino.length) {
      // this.router.navigate(['/buscar', termino]);
      this.router.navigate(['/heroes', termino]);
    } else {
      this.router.navigate(['/heroes']);
    }
  }

}
