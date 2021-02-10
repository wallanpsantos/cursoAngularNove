import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ProductModel } from "./../product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.update(this.product).subscribe((product) => {
      this.productService.showMessage(
        'Produto "' + product.name + '" Atualizado com Sucesso', false
      );
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
