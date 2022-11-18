import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Su funcion es solo hacer una accion cuando se obtiene un msj sin modificar la data
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap( console.log) );
  }

}
