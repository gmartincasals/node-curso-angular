import {Component, OnInit } from '@angular/core';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

@Component({
  selector: 'favoritos-list',
  templateUrl: 'app/views/favoritos-list.html',
  providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit {
  public title: string;
  public errorMessage;

  constructor(
    private _favoritoService: FavoritoService
  ){
    this.title = 'Listado de marcadores:';
  }

  ngOnInit() {
    console.log('FavoritosListComponent Cargado!!!');
    this._favoritoService.getFavoritos().subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage != null){
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    );
  }
}
