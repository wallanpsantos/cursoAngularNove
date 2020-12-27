import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"],
})
export class ProductCreateComponent implements OnInit {

  product: ProductModel = {
    name: null,
    price: null,
    id: null
  }

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso");
      this.router.navigate(["/products"]);
    })

    this.productService.showMessage("Produto criado...")
  }

  cancel(): void {
    this.productService.showMessage("Operação cancelada...")
    this.productService.cancel()
  }
}
