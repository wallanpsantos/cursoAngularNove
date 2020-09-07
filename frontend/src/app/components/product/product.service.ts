import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

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
}
