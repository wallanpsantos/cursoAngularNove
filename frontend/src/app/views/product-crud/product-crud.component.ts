import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.scss"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: "Cadastro de Produto",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProduct(): void {
    this.router.navigate(["/products/create"]);
    console.log("navigateToProduct");
  }
}
