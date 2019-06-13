import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getPokemon();

  }
  getPokemon(){
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    pokemon.subscribe(data => {
      console.log(`${data.name} is my favorite pokemon! Here are some of his abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}. He is also a ${data.types[0].type.name} and ${data.types[1].type.name} type pokemon!`)

    })
  }
}
