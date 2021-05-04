import { Component, OnInit } from '@angular/core';
import  { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import  { Proveedor } from '../proveedor'
import { ProveedorService } from '../proveedor.service'
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

 proveedor: Proveedor = {
   id: 1,
   name: 'Ernesto'
 };

 onSelectedProveedor?: Proveedor;
 proveedor:Proveedor[];


 constructor( private datosProveedor:ProveedorService)
 {
 }

 ngOnInit(): void {

  this.datosProveedor.getProveedores().subscribe((data: any[])=>{
    console.log(data);
    this.proveedores = data;
  })

 }

 onSelect(proveedor: Proveedor): void {
   this.onSelectedProveedor = proveedor;
 } 
 agregar(name: string, id:number): void {
  name = name.trim();

  var newproveedor = <Proveedor>{};

   newproveedor.id=id;
   newproveedor.name=name;
   newproveedor.type="proveedor";
   newproveedor.saldo=0;
   newproveedor.estado="nuevo";

   if (!name) { return; }
   this.datosProveedor.agregaProveedor(newProveedor)
   .subscribe(proveedor => {
        this.proveedores.push(proveedor);
   });
}







}
