import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  




 proveedoresUrl = "http://localhost:8080/clientes";
 
  constructor(private http: HttpClient) {
  }
         public getProveedores()
         {
           return this.http.get<Proveedor[]>(this.proveedoresUrl)
           .pipe(
             tap(_ => console.log('extrayendo catalogos')),
             catchError(this.handleError<Proveedor[]>('loadProveedor', []))
           );
         }
           private handleError<T>(operation = 'operation', result?: T){
             return (error: any): Observable<T> => {
               console.error(error);
               console.log(`${operation} failed: ${error.message}`);

               return of(result as T);
             };
           }

           agregaProveedor(proveedor: Proveedor): Observable<Proveedor> {
             return this.http.post<Proveedor>(this.proveedoresUrl, proveedor, this.httpOptions).pipe(
               tap((newProveedor: Proveedor) => console.log(`added proveedor w/ id=${newProveedor.id}
               catchError(this.handleError<Proveedor>('addProveedor'))
             );
           }
        }
         