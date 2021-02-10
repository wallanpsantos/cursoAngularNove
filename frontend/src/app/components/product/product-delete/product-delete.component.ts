import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductModel } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.scss"],
})
export class ProductDeleteComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /**
     *  Forca conversao de valor String pra Number
     *  Para converter para valor numerico adicionar + antes do this.route...
     *  +this.route.snapshot.paramMap.get("id");
     */
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(`${this.product.id}`).subscribe((product) => {
      this.product = product;
      this.router.navigate(["/products"]);
      this.productService.showMessage("Produto exluido com sucesso!", false);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
