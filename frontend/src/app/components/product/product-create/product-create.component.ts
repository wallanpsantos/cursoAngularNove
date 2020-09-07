import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.showMessage("Produto criado...");
  }

  cancel(): void {
    this.productService.showMessage("Operação cancelada...");
    this.productService.cancel();
  }
}
