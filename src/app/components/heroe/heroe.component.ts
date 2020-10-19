import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
  ){
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      console.log(params['id']);
      console.log(this.heroe);
      console.log(this._heroesService);
      // tslint:disable-next-line:no-string-literal
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
  ngOnInit(): void {

  }


}
