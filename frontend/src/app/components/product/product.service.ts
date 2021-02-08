import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { ProductModel } from './product.model';

@Injectable({
  providedIn: "root",
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';


  constructor(private snackBar: MatSnackBar, private router: Router, private http: HttpClient) {}

  showMessage(message: string): void {
    this.snackBar.open(message, "Fechar SnackBar", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  create(product: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(this.baseUrl, product)
  }

  read() :Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl)
  }

  readById(id: string): Observable<ProductModel>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ProductModel>(url)
  }

  update(product: ProductModel): Observable<ProductModel>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<ProductModel>(url, product)
  }
}